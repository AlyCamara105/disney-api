import Link from "next/link";
import DropMenu from "@/components/DropMenu";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  function characterDatabaseClicked() {
    router.push({
      pathname: "/CharacterDatabase",
      query: {
        search: "",
        page: 1,
      },
    });
  }

  return (
    <nav className="flex w-full justify-between bg-gradient-to-r from-[#e36414] to-[#fb8b24] p-3 text-4xl font-semibold text-[#0f4c5c] sm:text-2xl md:text-3xl lg:text-4xl">
      <Link href="/">
        <div className="flex items-center space-x-2 transition-all duration-100 ease-in-out hover:cursor-pointer hover:drop-shadow">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYV5M1my7mdDAB3YUB4IiMIxCPoZAN0yV2uQ&usqp=CAU"
            alt=""
            className="h-12 w-12 rounded-md"
          />
          <h1>Home</h1>
        </div>
      </Link>
      <ul className="flex items-center space-x-3 lg:space-x-6">
        <button onClick={characterDatabaseClicked}>
          <li className="hidden transition-all duration-100 ease-in-out  hover:cursor-pointer hover:drop-shadow sm:inline">
            Character Database
          </li>
        </button>
        <li className="hidden rounded-full bg-[#e36414]/80 p-2 transition-all duration-100 ease-in-out hover:cursor-pointer hover:opacity-100 hover:drop-shadow sm:inline">
          Contact
        </li>
        <li>
          <DropMenu />
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
