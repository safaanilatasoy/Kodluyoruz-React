import styles from './styles.module.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <nav className={styles.nav}>
        <div className={styles.left}>
            <div className="logo">
                <Link to="/">eCommerce</Link>
            </div>

            <ul className="menu">
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </div>
        <div className="rightContainer">right

        </div>
      </nav>
    
  );
}

export default Navbar
