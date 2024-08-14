import { useState } from "react";
import Bookmark from "./components/Bookmark";
import { Link } from "react-router-dom";
import CopyBtn from "./components/CopyBtn";
import OpenBtn from "./components/OpenBtn";

function CollectionCard({ collection }) {
  return (
    <div className="bg-base-200 p-6 rounded mb-4 break-inside-avoid-column h-96">
      <div className="flex w-full h-24">
        <div className="w-[90%]">
          <h2 className="text-xl font-medium">{collection.title}</h2>
          <h3 className="mb-6 font-thin">
            Descripción de lo que abarca esta colección. Descripción de lo que
            abarca esta colección.
          </h3>
        </div>
        <div className="flex flex-col items-end h-full w-[10%]">
          <OpenBtn id={collection.id}/>
          <CopyBtn id={collection.id}/>
        </div>
      </div>
      <div className="overflow-scroll h-max scrollbar-hide">
        {collection.bookmarks?.map((bookmark, bmIndex) => (
          <Bookmark bookmark={bookmark} key={bmIndex} />
        ))}
      </div>
    </div>
  );
}

export default CollectionCard;
