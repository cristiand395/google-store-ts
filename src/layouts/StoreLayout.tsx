import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.component";

import './StoreLayout.css'
const StoreLayout = () => {
  return (
    <div className='store-page-container'>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default StoreLayout;