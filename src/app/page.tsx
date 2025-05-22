'use client'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Input } from "@/shared/components/ui/input";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
        if (isMounted) setLoading(false);
      }
    }
  
    fetchData();
  
    return () => { isMounted = false; };
  }, []);

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
          setError('Ошибка загрузки событий');
          console.error(err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
  
    fetchData();
  
    return () => { isMounted = false; };
  }, []);

  const filteredEvents = events.filter(event => 
    event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        
        {loading && <p className="text-gray-500">Загрузка событий...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        <div className="flex-1 overflow-y-auto">
          <div className='flex flex-wrap'>
            {category.map((item: any) => 
              <div key={item.id} className='flex flex-col w-[20%] items-center h-[82px]'>
                <div className='w-[48px] h-[48px] bg-[#9c89fa] rounded-full mb-[6px]'></div>
                <div className='text-[12px] text-center leading-[100%]'>{item.title}</div>
              </div>
            )}
          </div>
          {filteredEvents.map(event => (
            <div key={event.id} className="p-3 border-b hover:bg-gray-50 cursor-pointer">
              <h3 className="font-medium">{event.title || 'Без названия'}</h3>
              <p className="text-sm text-gray-600">{event.description || 'Нет описания'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Карта */}
      <div className="flex-1 h-full relative">
        <YMaps 
          query={{ 
            apikey: 'ваш_api_ключ', // Обязательно замените на реальный ключ
            lang: 'ru_RU',
            load: 'package.full'
          }}
        >
          <div className="w-full h-full"> {/* Добавлен контейнер */}
            <Map 
              width="100%"
              height="100%"
              defaultState={{ 
                center: [58.009535, 56.224404],
                zoom: 14,
                controls: ['zoomControl', 'fullscreenControl']
              }}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
              {filteredEvents.map(event => (
                <Placemark
                  key={event.id}
                  geometry={[event.coordinate_one, event.coordinate_two]}
                  properties={{
                    balloonContent: `
                      <div style="padding: 10px">
                        <h3 style="margin: 0 0 8px 0">${event.title || 'Без названия'}</h3>
                        <p style="margin: 0">${event.description || 'Нет описания'}</p>
                      </div>
                    `,
                    hintContent: event.title
                  }}
                  options={{
                    preset: 'islands#circleDotIcon', // Простая круглая иконка
                    iconColor: '#3f51b5' // Синий цвет
                  }}
                />
              ))}
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
}