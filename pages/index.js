import { Inter } from "next/font/google";
import axios from "axios";
import CharacterCard from "@/components/CharacterCard";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const pageSize = useSelector((state) => state.defaultPageSize.value);
  const pages = Math.floor(7450 / pageSize);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://api.disneyapi.dev/character?page=${Math.ceil(
          Math.random() * pages
        )}&pageSize=${pageSize}`
      );

      setCharacters(data.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="mt-10 px-5 text-center">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-5xl font-bold text-[#9a031e] drop-shadow-lg sm:text-6xl lg:text-7xl">
          Find a Disney Character
        </h1>
        <SearchBar />
      </div>
      <div className="mt-10 flex w-full flex-wrap justify-center">
        {characters.map((character) => {
          return <CharacterCard key={character._id} id={character._id} />;
        })}
      </div>
    </div>
  );
}
