import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
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
    <footer className="my-4 flex flex-col items-center md:my-5 lg:my-6">
      <ul className="mb-5 flex justify-center space-x-4 font-bold text-[#0f4c5c] lg:space-x-7">
        <Link href="/">
          <li className="cursor-pointer transition-all duration-100 hover:drop-shadow-lg">
            Home
          </li>
        </Link>
        <button onClick={characterDatabaseClicked}>
          <li className="cursor-pointer transition-all duration-100 hover:drop-shadow-lg">
            Character Database
          </li>
        </button>
        <li className="cursor-pointer transition-all duration-100 hover:drop-shadow-lg">
          Contact
        </li>
      </ul>
      <p className="text-[#0f4c5c]/90">&copy; Aly Camara</p>
    </footer>
  );
}
export default Footer;
