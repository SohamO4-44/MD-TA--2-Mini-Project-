import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import styles from "./App.module.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trips from "./components/Trips";
import AddTrip from "./components/AddTrip";

export default function App() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      place: "Goa",
      days: 3,
      image:
        "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070",
    },
    {
      id: 2,
      place: "Manali",
      days: 5,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    },
    {
      id: 3,
      place: "Jaipur",
      days: 4,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=2070",
    },
    {
      id: 4,
      place: "Kerala",
      days: 6,
      image:
        "https://images.unsplash.com/photo-1602216055808-4e2d4c3e6c3f?q=80&w=2070",
    },
    {
      id: 5,
      place: "Ladakh",
      days: 7,
      image:
        "https://images.unsplash.com/photo-1622290291469-0d0c3e5e8f0f?q=80&w=2070",
    },
    {
      id: 6,
      place: "Rishikesh",
      days: 3,
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2070",
    },
  ]);

  const addTrip = (newTrip) => {
    setTrips([...trips, { ...newTrip, id: Date.now() }]);
  };

  const deleteTrip = (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      setTrips(trips.filter((trip) => trip.id !== id));
    }
  };

  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/trips"
            element={<Trips trips={trips} deleteTrip={deleteTrip} />}
          />
          <Route path="/add" element={<AddTrip addTrip={addTrip} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
