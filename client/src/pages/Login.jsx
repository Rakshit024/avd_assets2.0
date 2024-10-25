// client/src/pages/Login.jsx
import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import '../App.css';
import '../cssPages/Login.css';
import signinIcon from '../assets/images/signinIcon.png';
import bannerImage from '../assets/images/AvdAssetsIcon.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ msg: "" });
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check credentials
    if (email === "admin" && password === "1234") {
      navigate("/dashboard"); // Redirect to Dashboard on successful login
    } else {
      setErrors({ msg: "Invalid username or password" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="image-side">
          <img src={signinIcon} alt="Login illustration" className="signin-icon" />
        </div>

        <div className="form-side">
          <img src={bannerImage} alt="Banner" className="banner-image" />

          <Form method="POST" className="login-form" onSubmit={handleSubmit}>
            <h4><b>Sign In</b></h4>
            {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}
            <div className="form-group">
              <label>Your email</label>
              <input
                type="text"
                name="email"
                value={email}
                className="form-control"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="btn-signin">Sign In</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
