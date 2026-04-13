import styles from "../App.module.css";
import TripCard from "./TripCard";

export default function Trips({ trips, deleteTrip }) {
  return (
    <div className={styles.tripsPage}>
      <div className={styles.tripsHeader}>
        <h1>My Adventures</h1>
        <p>{trips.length} Destinations Added</p>
      </div>

      {trips.length === 0 ? (
        <div className={styles.empty}>
          <h2>No trips yet! Start planning your first adventure ✨</h2>
        </div>
      ) : (
        <div className={styles.tripContainer}>
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} deleteTrip={deleteTrip} />
          ))}
        </div>
      )}
    </div>
  );
}
