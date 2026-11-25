import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const faculty = JSON.parse(localStorage.getItem("faculty"));
  const [room, setRoom] = useState("");

  const updateLocation = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5001/api/faculty/update-location",
        { room },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Location updated!");
    } catch (error) {
      alert("Error updating location");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome, {faculty?.name}</h2>
      <h4>Department: {faculty?.department}</h4>

      <input
        type="text"
        placeholder="Enter current room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      /><br/><br/>

      <button onClick={updateLocation}>Update Location</button>
    </div>
  );
};

export default Dashboard;
