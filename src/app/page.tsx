'use client'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Input } from "@/shared/components/ui/input";
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Users } from 'lucide-react';

export default function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const mapRef = useRef<any>(null);

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
  }, []);

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
      // Открываем балун при клике
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
  
    return matchesSearch && matchesCategories;
  });

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'numeric', 
      year: 'numeric',
      timeZone: 'UTC' // Добавляем для корректного отображения даты
    };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Боковая панель */}
      <div className="w-[480px] h-full bg-white p-4 flex flex-col border-r">
        <Input 
          type="text" 
          placeholder="Поиск событий..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4"
        />
        
        {error && <p className="text-red-500">{error}</p>}
        
        <div className="flex-1 overflow-y-auto">
          {/* Прелоадер категорий */}
          {categoriesLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className='flex flex-wrap'>
              {category.map((item) => (
                <div 
                  key={item.id} 
                  className='flex flex-col w-[20%] items-center h-[82px] cursor-pointer'
                  onClick={() => handleCategoryClick(item.id)}
                >
                  <div 
                    style={{
                      backgroundColor: item.color ? `#${item.color}` : '#9c89fa',
                      //border: selectedCategories.includes(item.id) ? '2px solid #3f51b5' : 'none'
                      opacity: selectedCategories.includes(item.id) ? '100%' : "70%"
                    }} 
                    className='w-[48px] h-[48px] rounded-full mb-[6px] flex items-center justify-center opacity-50 transition-all'
                  >
                    <div dangerouslySetInnerHTML={{ __html: item.img }} />
                  </div>
                  <div className='text-[12px] text-center leading-[100%]'>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
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
                    {event.participants_count && (
                      <div className="flex flex-col mt-1 text-xs text-gray-500">
                        {event.direction && (
                          <span className="px-2 py-0.5 bg-gray-100 rounded-full w-fit">
                            {event.direction}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500 mb-2">Нет событий, соответствующих фильтрам</p>
                  {selectedCategories.length > 0 && (
                    <button 
                      onClick={() => setSelectedCategories([])}
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
              center: [58.009535, 56.224404],
              zoom: 14,
              controls: ['zoomControl', 'fullscreenControl']
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            instanceRef={mapRef}
          >
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
                  preset: selectedEventId === event.id ? 'islands#blueDotIcon' : 'islands#circleDotIcon',
                  iconColor: selectedEventId === event.id ? '#3f51b5' : '#4a4a4a',
                  balloonCloseButton: true
                }}
                onClick={() => {
                  setSelectedEventId(event.id);
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}