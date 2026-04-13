import { NavLink } from "react-router-dom";
import styles from "../App.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logo}
        onClick={() => (window.location.href = "/")} // or use useNavigate
      >
        Travel Planner
      </div>
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/trips"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Trips
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Add Trip
        </NavLink>
      </div>
    </nav>
  );
}
