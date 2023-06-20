import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

function Character({ id }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`https://api.disneyapi.dev/character/${id}`);

      setCharacter(data.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="h-1/2 w-1/2 p-1">
      <Image
        className="h-full w-full rounded-md"
        src={character.imageUrl}
        width={200}
        height={200}
        alt=""
      />
    </div>
  );
}
export default Character;
