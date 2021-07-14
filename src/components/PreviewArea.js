import React from "react";
import { useData } from "../context/DataContext";
import CatSprite from "./CatSprite";
import Icon from "./Icon";

export default function PreviewArea() {
  const Data = useData();

  return (
    <div className="flex-none h-full overflow-y-auto p-2 w-full relative">
      <Icon name="flag" size={25} className="text-green-600 flag mx-2" />
      <CatSprite ref={Data.spritRef} deg='0' id={Data.currentSprit} className={'sprit absolute'} />
    </div>
  );
}
