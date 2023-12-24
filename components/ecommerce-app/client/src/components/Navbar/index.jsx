import styles from './styles.module.css'
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">eCommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <ButtonGroup>
          <Link to="/signin">
            <Button colorScheme="pink">Login</Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="green">Register</Button>
          </Link>
        </ButtonGroup>
      </div>
    </nav>
  );
}

export default Navbar
