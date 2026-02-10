import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
