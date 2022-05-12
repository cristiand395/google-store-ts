import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.component";

const StoreLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
}

export default StoreLayout;