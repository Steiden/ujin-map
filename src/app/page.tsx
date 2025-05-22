'use client'
import Image from "next/image";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex">
      <div className="w-[480px] h-full bg-[#FFF] p-4">
        <Input type="email" placeholder="Email" />
        <Button>Button</Button>
      </div>
      <div className="w-[calc(100%-480px)] h-full">
        <YMaps>
            <Map width={'100%'} height={'100%'} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
      </div>
    </div>
  );
}
