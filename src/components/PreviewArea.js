import React from "react";
import { useData } from "../context/DataContext";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  const Data = useData();

  return (
    <div className="flex-none h-full overflow-y-auto p-2 w-full relative">
      <CatSprite ref={Data.spritRef} deg='0' id={Data.currentSprit} className={'sprit absolute'} />
    </div>
  );
}
