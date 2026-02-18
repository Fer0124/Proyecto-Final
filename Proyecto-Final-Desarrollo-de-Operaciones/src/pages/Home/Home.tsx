import StatCard from "@/components/molecules/StatCard/StatCard";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section>
      <div className={styles.header}>
        <h1>Dashboard Administrador</h1>
        <button className={styles.createBtn}>Crear Proyecto</button>
      </div>

      <div className={styles.grid}>
        <StatCard title="Proyectos Activos" value={8} />
        <StatCard title="Consultores" value={8} />
        <StatCard title="Proyectos en Riesgo" value={1} />
      </div>
    </section>
  );
};

export default Home;
