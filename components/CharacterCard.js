import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

function Character({ id }) {
  const [character, setCharacter] = useState(null);
  const [imgErrored, setImgErrored] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`https://api.disneyapi.dev/character/${id}`);

      setCharacter(data.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="relative m-1 flex h-[calc(50%-8px)] max-h-44 w-[calc(50%-8px)] max-w-[168px] overflow-hidden">
      {(imgErrored || !imgLoaded) && (
        <div className="to- absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-r from-[#fb8b24] to-[#e36414]"></div>
      )}
      {character ? (
        <Image
          className=" cursor-pointer rounded-md border-white object-cover transition-all duration-75 hover:border hover:opacity-90"
          src={character.imageUrl}
          width={200}
          height={200}
          alt=""
          onError={() => {
            setImgErrored(true);
          }}
          onLoadingComplete={() => {
            setTimeout(() => {
              setImgLoaded(true);
            }, 1000);
          }}
        />
      ) : (
        <div className="to- absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-r from-[#fb8b24] to-[#e36414]"></div>
      )}
    </div>
  );
}
export default Character;
