import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { useParams } from "react-router-dom";
import { fetchById } from "../../api/supabase/database";

function SingleView() {
  let { id } = useParams();
  const [collection, setCollection] = useState("");

  useEffect(() => {
    async function loadCollections() {
      const { collections, error } = await fetchById(id);
      if (error) {
        console.log(error);
      } else {
        setCollection(collections);
        console.log(collections);
      }
    }

    loadCollections();
  }, [id]);

  return (
    <div className="w-full h-screen pt-24 bg-base-100 flex justify-center">
      {collection !== "" ? <Card collection={collection} /> : <span className="loading loading-spinner loading-lg"></span>}
    </div>
  );
}

export default SingleView;
