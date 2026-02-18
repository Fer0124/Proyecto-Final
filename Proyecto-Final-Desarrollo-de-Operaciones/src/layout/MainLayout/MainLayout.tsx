import { Outlet } from "react-router-dom";
import Navbar from "@/components/molecules/Navbar/Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <ul>
            <li>Dashboard</li>
            <li>Gestor de Proyectos</li>
            <li>Consultores</li>
            <li>Tablero Scrum</li>
          </ul>
        </aside>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
