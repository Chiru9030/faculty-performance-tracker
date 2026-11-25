import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("faculty", JSON.stringify(res.data.faculty));

      setMessage("Login successful!");
      window.location.href = "/dashboard";
    } catch (error) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Faculty Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>

      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </div>
  );
};

export default Login;
