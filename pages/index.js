import { Inter } from "next/font/google";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import CharacterCard from "@/components/CharacterCard";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://api.disneyapi.dev/character?page=${Math.ceil(
          Math.random() * 1850
        )}&pageSize=4`
      );
      console.log(data);

      setCharacters(data.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="h-screen px-5 text-center">
      <div className="h-[15%]" />
      <div className="flex h-[35%] flex-col items-center space-y-5">
        <h1 className="text-5xl font-bold text-[#9a031e] drop-shadow-lg sm:text-6xl lg:text-7xl">
          Find a Disney Character
        </h1>
        <div className="flex items-center">
          <input
            className="rounded-md bg-[#e36414]/30 pl-1 text-2xl font-medium text-[#0f4c5c] outline-none drop-shadow-lg placeholder:text-[#0f4c5c] sm:rounded-r-none sm:text-3xl sm:leading-3 lg:text-4xl lg:leading-4"
            type="text"
            placeholder="Sleeping Beauty..."
          />
          <SearchIcon className="cursor-pointer rounded-lg bg-[#5f0f40] text-4xl text-[#9a031e] transition-all duration-100 ease-in hover:opacity-90 hover:drop-shadow-xl sm:text-5xl lg:text-6xl" />
        </div>
      </div>
      <div className="flex h-[50%] w-full flex-wrap overflow-hidden">
        {characters.map((character) => {
          return <CharacterCard key={character._id} id={character._id} />;
        })}
      </div>
    </div>
  );
}
