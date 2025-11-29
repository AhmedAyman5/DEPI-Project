import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../signup/Signup.css";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Admin
    if (email === "admin@gmail.com" && password === "admin") {
      login(email, password);
      navigate("/admin-panel");
      toast.success("Logged in successfully")
      return;
    }
    
    const success = login(email, password);
    if (success) {
      toast.success("Logged in successfully")
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="m-auto vh-100 d-flex justify-content-center align-items-center">
      <div className="signup-container ">
        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link
            to="/sign-up"
            style={{ color: "#008ECC", textDecoration: "none" }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
