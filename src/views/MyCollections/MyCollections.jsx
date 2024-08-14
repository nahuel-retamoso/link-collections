import { useEffect, useState } from "react";
import CollectionCard from "./Card/Card";
import { fetchData } from "../../api/supabase/database";

function MyCollections() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        async function loadCollections() {
            const { collections, error } = await fetchData();
            if (error) {
              console.log(error);
            } else {
              setCollections(collections);
              console.log(collections)
            }
          }
      
          loadCollections();
    }, []);

    return (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-20 pt-24">
            {collections?.map((collection, index) => (
                <CollectionCard collection={collection} key={index}/>
            ))}
        </div>
    );
}

export default MyCollections;
