import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
    const pathname = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {pathname !== "/login" && <Footer />}
    </>
  );
}
 
export default MainLayout;