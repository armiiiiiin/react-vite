import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const res = await axios.post("https://api.indeed.nginx.mijob.ir/signup", {
      email,
      password,
    }, { withCredentials: true });
    setToken(res.data.token);
  };

  const refresh = async () => {
    try {
      const res = await axios.post("https://api.indeed.nginx.mijob.ir/refresh", {}, {
        withCredentials: true
      });
      setToken(res.data.token);
    } catch (err) {
      console.log("Session expired.");
    }
  };

  useEffect(() => {
    const interval = setInterval(refresh, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Indeed-style Job Board</h1>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signup}>Sign Up</button>
      {token && <p className="token">Access Token: {token}</p>}
    </div>
  );
}

export default App;
