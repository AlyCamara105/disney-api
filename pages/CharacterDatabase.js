import CharacterCard from "@/components/CharacterCard";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ArrowForwardIos } from "@mui/icons-material";
import { useSelector } from "react-redux";

function CharacterDatabase() {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [pageCounter, setPageCounter] = useState({});
  const pageSize = useSelector((state) => state.defaultPageSize.value);

  function pushRouterToNextPage() {
    router.push({
      pathname: "/CharacterDatabase",
      query: {
        search: router.query.search,
        page: pageCounter[router.query.search].page,
      },
    });
  }

  function previousPage() {
    setPageCounter((previousPageCounter) => {
      previousPageCounter[router.query.search].page -= 1;

      return previousPageCounter;
    });
    pushRouterToNextPage();
  }

  function nextPage() {
    setPageCounter((previousPageCounter) => {
      previousPageCounter[router.query.search].page += 1;

      return previousPageCounter;
    });
    pushRouterToNextPage();
  }

  useEffect(() => {
    async function fetchData() {
      let data = null;

      if (router.query.search !== "") {
        data = await axios.get(
          `https://api.disneyapi.dev/character?name=${router.query.search}&pageSize=${pageSize}&page=${router.query.page}`
        );
      } else {
        data = await axios.get(
          `https://api.disneyapi.dev/character?pageSize=${pageSize}&page=${router.query.page}`
        );
      }

      setCharacters(
        data.data.data instanceof Object
          ? new Array(data.data.data)
          : data.data.data
      );
      setInfo(data.data.info);
    }

    if (router.query.search !== undefined && router.query.page !== undefined) {
      fetchData();
      setPageCounter({
        [String(router.query.search)]: { page: router.query.page },
      });
    }
  }, [router.query]);

  return (
    <div className="mt-10 px-5">
      <div className="flex w-full justify-center sm:justify-end">
        <SearchBar />
      </div>
      <div className="mt-10 flex flex-wrap justify-center overflow-hidden">
        {characters.map((character) => {
          return <CharacterCard key={character._id} id={character._id} />;
        })}
      </div>
      <div className="mb-20 mt-5 flex justify-center">
        <div className="flex items-center space-x-5">
          {info.previousPage && (
            <div className="flex flex-col">
              <p className="mb-1 font-medium text-[#9a031e]">Previous Page</p>
              <button onClick={previousPage}>
                <ArrowBackIosNewIcon className="rounded-full bg-[#5f0f40]/50 text-[#5f0f40] transition duration-100 hover:scale-125 hover:bg-[#5f0f40]/40 hover:drop-shadow-2xl" />
              </button>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <p className="font-bold text-[#9a031e]">Page </p>
            <input
              className="w-20 rounded-md bg-[#e36414]/30 pl-1 text-2xl font-medium text-[#9a031e] outline-none drop-shadow-lg transition duration-100 placeholder:text-[#9a031e] focus:bg-[#e36414]/60"
              type="number"
              placeholder={router.query.page}
            />
            <p className="font-bold text-[#9a031e]"> of {info.totalPages}</p>
          </div>
          {info.nextPage && (
            <div className="flex flex-col">
              <p className="mb-1 font-medium text-[#9a031e]">Next Page</p>
              <button onClick={nextPage}>
                <ArrowForwardIos className="rounded-full bg-[#5f0f40]/50 text-[#5f0f40] transition duration-100 hover:scale-125 hover:bg-[#5f0f40]/40 hover:drop-shadow-2xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CharacterDatabase;
