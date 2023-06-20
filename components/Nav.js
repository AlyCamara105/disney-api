import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  return (
    <nav className="absolute flex w-full justify-between bg-gradient-to-r from-[#e36414] to-[#fb8b24] p-3 text-4xl font-semibold text-[#0f4c5c] sm:text-2xl md:text-3xl lg:text-4xl">
      <div className="flex items-center space-x-2 transition-all duration-100 ease-in-out hover:cursor-pointer hover:drop-shadow">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYV5M1my7mdDAB3YUB4IiMIxCPoZAN0yV2uQ&usqp=CAU"
          alt=""
          className="h-12 w-12 rounded-md"
        />
        <h1>Home</h1>
      </div>
      <ul className="flex items-center space-x-3 lg:space-x-6">
        <li className="hidden transition-all duration-100 ease-in-out  hover:cursor-pointer hover:drop-shadow sm:inline">
          Character Database
        </li>
        <li className="hidden rounded-full bg-[#e36414]/80 p-2 transition-all duration-100 ease-in-out hover:cursor-pointer hover:opacity-100 hover:drop-shadow sm:inline">
          Contact
        </li>
        <li>
          <MenuIcon className="mr-5 text-4xl transition-all duration-100 ease-in-out hover:cursor-pointer hover:drop-shadow sm:hidden" />
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
