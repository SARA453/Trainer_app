
import SARFIT from "../assets/images/SARFIT.png";
import Menu from "./Menu";
import HamburgerMenu from "./HmaburgerMenu";

const Header = () => {
  
  return (
    <header className="container mx-auto flex flex-col justify-end md:gap-4 mt-4 md:flex-row font-['Roboto-Regular']">
      <img src={SARFIT} className="h-16 w-16 self-start mr-auto" />
      <div className="hidden lg:flex">
        <Menu />
      </div>
      <div className="flex lg:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
