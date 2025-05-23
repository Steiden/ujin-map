'use client'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import { Input } from "@/shared/components/ui/input";
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Users, ChevronDown, ChevronUp, LocateFixed, MapPin } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog"
import { Button } from '@/shared/components/ui/button';

export default function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [radius, setRadius] = useState<number | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<[number, number] | null>(null);
  const mapRef = useRef<any>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const radiusOptions = [1, 2, 3, 4, 5, 10, 15]; // Варианты радиуса в км

  // Определение местоположения пользователя
  const getUserLocation = () => {
    setLocationLoading(true);
    setLocationError('');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
          setUserLocation(coords);
          setLocationLoading(false);
          
          // Центрируем карту на местоположении пользователя
          if (mapRef.current) {
            mapRef.current.setCenter(coords, 14);
          }
        },
        (error) => {
          setLocationError('Не удалось определить местоположение');
          setLocationLoading(false);
          console.error('Geolocation error:', error);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setLocationError('Геолокация не поддерживается вашим браузером');
      setLocationLoading(false);
    }
  };

  // Автоматически определяем местоположение при загрузке
  useEffect(() => {
    getUserLocation();
  }, []);

  // Загрузка событий
  useEffect(() => {
    let isMounted = true;
    
    async function fetchData() {
      try {
        const res = await axios.get('https://sinfully-tops-possum.cloudpub.ru/events');
        if (isMounted) {
          setEvents(res.data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Ошибка загрузки событий');
          console.error(err);
        }
      } finally {
        if (isMounted) setEventsLoading(false);
      }
    }
  
    fetchData();
  
    return () => { isMounted = false; };
  }, []);

  // Загрузка категорий
  useEffect(() => {
    let isMounted = true;
    
    async function fetchData() {
      try {
        const res = await axios.get('https://sinfully-tops-possum.cloudpub.ru/interests');
        if (isMounted) {
          setCategory(res.data);
          
          if (initialLoad && res.data.length > 0) {
            const shuffled = [...res.data].sort(() => 0.5 - Math.random());
            const randomCategories = shuffled.slice(0, 4).map(c => c.id);
            setSelectedCategories(randomCategories);
            setInitialLoad(false);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError('Ошибка загрузки категорий');
          console.error(err);
        }
      } finally {
        if (isMounted) setCategoriesLoading(false);
      }
    }
  
    fetchData();
  
    return () => { isMounted = false; };
  }, [initialLoad]);

  // Функция для расчета расстояния между точками (формула Хаверсина)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // радиус Земли в км
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleEventClick = (eventId: number) => {
    setSelectedEventId(eventId);
    const event = events.find(e => e.id === eventId);
    if (event && mapRef.current) {
      mapRef.current.setCenter([event.coordinate_one, event.coordinate_two], 16);
      mapRef.current.balloon.open([event.coordinate_one, event.coordinate_two], {
        content: `
          <div style="padding: 10px">
            <h3 style="margin: 0 0 8px 0">${event.title || 'Без названия'}</h3>
            <p style="margin: 0 0 4px 0"><strong>Дата:</strong> ${
              event.start_date === event.end_date 
                ? new Date(event.start_date).toLocaleDateString('ru-RU') 
                : `${new Date(event.start_date).toLocaleDateString('ru-RU')} - ${new Date(event.end_date).toLocaleDateString('ru-RU')}`
            }</p>
            <p style="margin: 0 0 4px 0"><strong>Организатор:</strong> ${event.executor || 'Не указан'}</p>
            <p style="margin: 0 0 4px 0"><strong>Участников:</strong> ${event.participants_count || 0}</p>
            ${event.description ? `<p style="margin: 4px 0 0 0">${event.description}</p>` : ''}
          </div>
        `
      });
    }
  };

  // Обработчик клика по карте
  const handleMapClick = (e: any) => {
    const coords = e.get('coords');
    setSelectedPoint(coords);
    setSelectedEventId(null); // Сбрасываем выбранное мероприятие
  };

  // Фильтрация событий
  const filteredEvents = events.filter(event => {
    if (!event) return false;
  
    // Фильтрация по поиску
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      (event.title?.toLowerCase().includes(searchLower)) || 
      (event.description?.toLowerCase().includes(searchLower));
  
    // Фильтрация по категориям
    const matchesCategories = selectedCategories.length === 0 || 
      (Array.isArray(event.interests) && 
       event.interests.some((interestId: any) => 
         selectedCategories.includes(Number(interestId))
       ));
  
    // Фильтрация по радиусу
    const matchesRadius = !userLocation || !radius || 
      calculateDistance(
        userLocation[0], 
        userLocation[1],
        event.coordinate_one,
        event.coordinate_two
      ) <= radius;
  
    return matchesSearch && matchesCategories && matchesRadius;
  });

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'numeric', 
      year: 'numeric',
      timeZone: 'UTC'
    };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Боковая панель */}
      <div className="w-[480px] h-full bg-white p-4 flex flex-col border-r">
        <div className="flex items-center gap-2 mb-4">
          <Input 
            type="text" 
            placeholder="Поиск событий..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <button 
            onClick={getUserLocation}
            disabled={locationLoading}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Определить мое местоположение"
          >
            {locationLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            ) : (
              <LocateFixed className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {(error || locationError) && (
          <p className="text-red-500 mb-2">{error || locationError}</p>
        )}
        
        <div className="flex-1 overflow-y-auto">
          {/* Прелоадер категорий */}
          {categoriesLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              <div className='flex items-center justify-between w-full mb-[10px]'>
                <div className='text-[20px] font-medium'>Интересы</div>
                {category.length > 10 && (
                  <div 
                    className='flex items-center text-[14px] text-[#878787] hover:text-[#373737] transition-all cursor-pointer'
                    onClick={() => setShowAllCategories(!showAllCategories)}
                  >
                    {showAllCategories ? 'Скрыть интересы' : 'Все интересы'}
                    {showAllCategories ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                  </div>
                )}
              </div>
              <div className='flex flex-wrap'>
                {category
                  .slice(0, showAllCategories ? category.length : 10)
                  .map((item) => (
                    <div 
                      key={item.id} 
                      className='flex flex-col w-[20%] items-center h-[82px] cursor-pointer'
                      onClick={() => handleCategoryClick(item.id)}
                    >
                      <div 
                        style={{
                          backgroundColor: item.color ? `#${item.color}` : '#9c89fa',
                          opacity: selectedCategories.includes(item.id) ? '100%' : "40%"
                        }} 
                        className='w-[48px] h-[48px] rounded-full mb-[6px] flex items-center justify-center transition-all'
                      >
                        <div dangerouslySetInnerHTML={{ __html: item.img }} />
                      </div>
                      <div className='text-[12px] text-center leading-[100%]'>
                        {item.title}
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
          )}

          {/* Кнопки выбора радиуса */}
          {userLocation && (
            <>
              <div className='flex items-center justify-between w-full mb-2'>
                <div className='text-[20px] font-medium'>Радиус поиска, км</div>
                <div
                  onClick={() => {
                    setRadius(null);
                    setSelectedPoint(null);
                  }}
                  className="text-[14px] text-[#878787] hover:text-[#373737] transition-all cursor-pointer"
                >
                  Сбросить
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {radiusOptions.map(km => (
                  <button
                    key={km}
                    onClick={() => setRadius(km)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      radius === km 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {km} км
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Прелоадер событий */}
          {eventsLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <div 
                    key={event.id} 
                    className={`p-3 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedEventId === event.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                    onClick={() => handleEventClick(event.id)}
                  >
                    <h3 className="font-medium text-gray-900">{event.title || 'Без названия'}</h3>
                    <div className="flex flex-col justify-between text-sm text-gray-600 mt-1">
                      <div className='flex items-center gap-2'>
                        <span className="font-medium">
                          {event.start_date === event.end_date 
                            ? formatDate(event.start_date)
                            : `${formatDate(event.start_date)} - ${formatDate(event.end_date)}`
                          }
                        </span>
                        <span className='flex items-center gap-1'><Users className='w-[16px] h-[16px]' color="#000000" /> {event.participants_count} участников</span>
                      </div>
                      <span className="text-gray-700">{event.executor || 'Организатор не указан'}</span>
                    </div>
                    {event.description && (
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{event.description}</p>
                    )}
                    {event.direction && (
                      <div className="flex flex-col mt-1 text-xs text-gray-500">
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full w-fit">
                          {event.direction}
                        </span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500 mb-2">Нет событий, соответствующих фильтрам</p>
                  {selectedCategories.length > 0 || radius && (
                    <button 
                      onClick={() => {
                        setSelectedCategories([])
                        setRadius(null)
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Сбросить фильтры
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Карта */}
      <div className="flex-1 h-full relative">
        <YMaps query={{ apikey: 'ваш_api_ключ', lang: 'ru_RU' }}>
          <Map
            width="100%"
            height="100%"
            defaultState={{ 
              center: userLocation || [58.009535, 56.224404],
              zoom: 14,
              controls: ['zoomControl', 'fullscreenControl']
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            instanceRef={mapRef}
            onClick={handleMapClick}
          >
            {/* Местоположение пользователя */}
            {userLocation && (
              <>
              <Placemark
                geometry={userLocation}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/myya.png',
                  iconImageSize: [32, 32],
                  iconImageOffset: [-16, -32],
                }}
                properties={{
                  hintContent: 'Ваше местоположение',
                  balloonContent: 'Вы здесь'
                }}
              />
              </>
            )}

            {userLocation && radius && (
              <Circle
                geometry={[userLocation, radius * 1000]} // радиус в метрах
                options={{
                  fillColor: '#1a73e840',
                  strokeColor: '#1a73e8',
                  strokeOpacity: 0.8,
                  strokeWidth: 2,
                  fillOpacity: 0.2
                }}
              />
            )}

            {/* Мероприятия */}
            {filteredEvents.map(event => (
              <Placemark
                key={event.id}
                geometry={[event.coordinate_one, event.coordinate_two]}
                properties={{
                  balloonContentHeader: event.title || 'Без названия',
                  balloonContent: `
                    <div style="padding: 8px">
                      <p style="margin: 0 0 6px 0"><strong>Дата:</strong> ${
                        event.start_date === event.end_date 
                          ? formatDate(event.start_date)
                          : `${formatDate(event.start_date)} - ${formatDate(event.end_date)}`
                      }</p>
                      <p style="margin: 0 0 6px 0"><strong>Организатор:</strong> ${event.executor || 'Не указан'}</p>
                      <p style="margin: 0 0 6px 0"><strong>Направление:</strong> ${event.direction || 'Не указано'}</p>
                      <p style="margin: 0 0 6px 0"><strong>Участников:</strong> ${event.participants_count || 0}</p>
                      ${event.description ? `<p style="margin: 6px 0 0 0; max-width: 300px">${event.description}</p>` : ''}
                    </div>
                  `,
                  hintContent: event.title || 'Без названия'
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/ya.png',
                  iconImageSize: [32, 32],
                  iconImageOffset: [-16, -16],
                  balloonCloseButton: true
                }}
                onClick={() => {
                  setSelectedEventId(event.id);
                }}
              />
            ))}
          </Map>
        </YMaps>

        {/* Кнопочки */}
        <div className='w-[40px] py-[8px] px-[4px] bg-white rounded-3xl translate-y-[-50%] absolute right-[20px] top-[50%] shadow gap-2 flex flex-col'>
            <Dialog>
              <DialogTrigger asChild>
                <div className='cursor-pointer'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img src="/day.png" alt="" />
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Мероприятие дня</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle>Мероприятие дня</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    {events.length > 0 && (
                      <>
                        {/* Получаем случайное мероприятие */}
                        {(() => {
                          const randomEvent = events[Math.floor(Math.random() * events.length)];
                          return (
                            <div className="rounded-lg bg-white">
                              <h3 className="font-medium text-lg mb-2">{randomEvent.title || 'Без названия'}</h3>
                              <div className="text-sm text-gray-600 mb-1">
                                <span className="font-medium">
                                  {randomEvent.start_date === randomEvent.end_date 
                                    ? formatDate(randomEvent.start_date)
                                    : `${formatDate(randomEvent.start_date)} - ${formatDate(randomEvent.end_date)}`
                                  }
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-2">
                                {randomEvent.executor || 'Организатор не указан'}
                              </p>
                              {randomEvent.description && (
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {randomEvent.description}
                                </p>
                              )}
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{randomEvent.participants_count || 0} участников</span>
                              </div>
                            </div>
                          );
                        })()}
                      </>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className='cursor-pointer'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img src="/random.png" alt="" />
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Случайное мероприятие</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle>Случайное мероприятие</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    {events.length > 0 && (
                      <>
                        {/* Получаем случайное мероприятие */}
                        {(() => {
                          const randomEvent = events[Math.floor(Math.random() * events.length)];
                          return (
                            <div className="rounded-lg bg-white">
                              <h3 className="font-medium text-lg mb-2">{randomEvent.title || 'Без названия'}</h3>
                              <div className="text-sm text-gray-600 mb-1">
                                <span className="font-medium">
                                  {randomEvent.start_date === randomEvent.end_date 
                                    ? formatDate(randomEvent.start_date)
                                    : `${formatDate(randomEvent.start_date)} - ${formatDate(randomEvent.end_date)}`
                                  }
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-2">
                                {randomEvent.executor || 'Организатор не указан'}
                              </p>
                              {randomEvent.description && (
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {randomEvent.description}
                                </p>
                              )}
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{randomEvent.participants_count || 0} участников</span>
                              </div>
                            </div>
                          );
                        })()}
                      </>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
        </div>
      </div>
    </div>
  );
}