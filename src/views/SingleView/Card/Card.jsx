import { useEffect, useState } from "react";
import Bookmark from "./components/Bookmark";
import CopyBtn from "./components/CopyBtn";

function Card({ collection }) {
  useEffect(() => {
    console.log(collection);
  }, [collection]);

  return (
    <div className="bg-base-100 p-12 rounded w-4/6 h-5/6">
      <div className="flex w-full h-28">
        <div className="h-full w-[90%]">
          <h2 className="text-2xl font-medium">{collection[0]?.title}</h2>
          <h3 className="text-md font-thin">
            Descripción de lo que abarca esta colección. Descripción de lo que abarca esta colección.
          </h3>
        </div>
        <div className="h-full w-[10%] flex justify-end">
          {collection[0]?.id > 0 ? <CopyBtn id={collection[0].id} /> : null}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {collection[0]?.bookmarks.map((bookmark, bmIndex) => (
          <Bookmark bookmark={bookmark} key={bmIndex} />
        ))}
      </div>
    </div>
  );
}

export default Card;
