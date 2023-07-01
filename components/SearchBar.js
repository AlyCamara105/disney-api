import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

function SearchBar({}) {
  let searchBarValue = "";
  const router = useRouter();

  function handleCharacterSearch(event) {
    router.push({
      pathname: "/CharacterDatabase",
      query: { search: searchBarValue, page: 1 },
    });
    document.getElementById("search_Input").value = "";
  }

  return (
    <div className="mt-2 flex items-center">
      <input
        id="search_Input"
        className="rounded-md bg-[#e36414]/30 pl-1 text-2xl font-medium text-[#0f4c5c] outline-none drop-shadow-lg transition duration-100 placeholder:text-[#0f4c5c] focus:bg-[#e36414]/60 sm:rounded-r-none sm:text-3xl sm:leading-3 lg:text-4xl lg:leading-4"
        type="text"
        placeholder="Sleeping Beauty..."
        onChange={(event) => (searchBarValue = event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleCharacterSearch();
        }}
      />
      <button onClick={handleCharacterSearch}>
        <SearchIcon className="cursor-pointer rounded-lg bg-[#5f0f40] text-4xl text-[#9a031e] transition-all duration-100 ease-in hover:opacity-90 hover:drop-shadow-xl sm:text-5xl lg:text-6xl" />
      </button>
    </div>
  );
}
export default SearchBar;
