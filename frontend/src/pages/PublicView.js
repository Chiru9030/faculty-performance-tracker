import React, { useEffect, useState } from "react";
import axios from "axios";

const PublicView = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:5001/api/faculty/all");
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Faculty Location Tracker</h2>
      <br />

      {data.map((item) => (
        <div key={item._id} style={{ padding: 10, marginBottom: 10, border: "1px solid gray" }}>
          <h3>{item.facultyId.name} ({item.facultyId.department})</h3>
          <p>Room: <strong>{item.room}</strong></p>
          <p>Last Updated: {new Date(item.lastUpdated).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PublicView;
