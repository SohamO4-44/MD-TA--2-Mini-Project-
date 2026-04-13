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
      image: "https://picsum.photos/id/1015/800/600",
    },
    {
      id: 2,
      place: "Manali",
      days: 5,
      image: "https://picsum.photos/id/1016/800/600",
    },
    {
      id: 3,
      place: "Jaipur",
      days: 4,
      image: "https://picsum.photos/id/1018/800/600",
    },
    {
      id: 4,
      place: "Kerala",
      days: 6,
      image: "https://picsum.photos/id/102/800/600",
    },
    {
      id: 5,
      place: "Ladakh",
      days: 7,
      image: "https://picsum.photos/id/1036/800/600",
    },
    {
      id: 6,
      place: "Rishikesh",
      days: 3,
      image: "https://picsum.photos/id/1040/800/600",
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

      </div>
    </Router>
  );
}
