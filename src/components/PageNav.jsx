import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
// import './PageNav.css';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul className="test">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
