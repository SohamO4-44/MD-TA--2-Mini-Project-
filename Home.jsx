import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div>
        <h1 className={styles.title}>Your Next Adventure Awaits</h1>
        <p className={styles.subtitle}>
          Create unforgettable journeys with smart planning and beautiful
          memories
        </p>
        <div className={styles.homeBtns}>
          <button className={styles.primary} onClick={() => navigate("/trips")}>
            View My Trips
          </button>
          <button className={styles.secondary} onClick={() => navigate("/add")}>
            Plan New Trip
          </button>
        </div>
      </div>
    </div>
  );
}
