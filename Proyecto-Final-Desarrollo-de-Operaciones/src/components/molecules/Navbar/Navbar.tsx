import styles from './Navbar.module.css';
import Button from '@/components/atoms/Button';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <h2 className={styles.logo}>MyApp</h2>

      <nav className={styles.actions}>
        <Button label="Login" variant="secondary" />
      </nav>
    </header>
  );
};

export default Navbar;
