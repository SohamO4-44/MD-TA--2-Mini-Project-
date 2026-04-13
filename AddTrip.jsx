import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";

export default function AddTrip({ addTrip }) {
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const [days, setDays] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!place || !days || !image) {
      alert("Please fill all fields");
      return;
    }

    addTrip({ place, days: Number(days), image });

    // Reset form and redirect
    setPlace("");
    setDays("");
    setImage("");
    navigate("/trips");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add New Trip</h2>
      <input
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Number of Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add Trip</button>
    </form>
  );
}
