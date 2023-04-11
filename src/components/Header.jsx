import { NavLink } from "react-router-dom";
import SARFIT from "../images/SARFIT.png";
import { useMediaQuery } from "@react-hook/media-query";
import Menu from "./Menu";
import HamburgerMenu from "./HmaburgerMenu";

const Header = () => {
  const isMediumOrLarge = useMediaQuery("(min-width: 768px)");
  return (
    <header className="container mx-auto flex flex-col justify-end md:gap-4 mt-4 md:flex-row"
    style={{ fontFamily: "McLetters" }} >
      <img src={SARFIT} className="h-16 w-16 self-start mr-auto" />
      {isMediumOrLarge? <Menu/> : <HamburgerMenu/>}
    </header>
  );
};

export default Header;
