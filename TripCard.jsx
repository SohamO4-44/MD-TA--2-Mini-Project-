import styles from "../App.module.css";

export default function TripCard({ id, place, days, image, deleteTrip }) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={place}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/360x260/2a1b4a/ffffff?text=Image+Not+Available";
        }}
      />
      <div className={styles.cardContent}>
        <h3>{place}</h3>
        <p>{days} Days Trip</p>
        <button className={styles.deleteBtn} onClick={() => deleteTrip(id)}>
          Delete Trip
        </button>
      </div>
    </div>
  );
}
