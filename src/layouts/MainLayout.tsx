import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="px-4 md:px8 lg:px-16 xl:px-32 2xl:px-64">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
