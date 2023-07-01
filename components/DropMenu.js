import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <div>
      <button onClick={handleClick}>
        <MenuIcon className="mr-5 text-4xl transition-all duration-100 ease-in-out hover:cursor-pointer hover:drop-shadow sm:hidden" />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/CharacterDatabase">
          <MenuItem
            className="flex justify-center font-semibold text-[#0f4c5c]"
            onClick={() => {
              handleClose();
              characterDatabaseClicked();
            }}
          >
            Character Database
          </MenuItem>
        </Link>
        <MenuItem
          className="flex justify-center font-semibold text-[#0f4c5c]"
          onClick={handleClose}
        >
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
