import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink to="/home" className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }>
          Dashboard
        </NavLink>

        <NavLink to="/create-project" className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }>
          Crear Proyecto
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
