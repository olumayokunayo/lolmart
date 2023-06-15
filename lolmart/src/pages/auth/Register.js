import React, { useState } from "react";
import RegisterImage from "../../assets/register.png";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import Card from "../../component/card/Card";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles["auth-div"]}>
        <div className={styles["auth-form"]}>
          <Card>
            <h1>Register</h1>
            <form onSubmit={registerHandler}>
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit">Register</button>
            </form>

            <div className={styles.register}>
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </Card>
        </div>
        <div>
          <img src={RegisterImage} alt="Login" width={400} />
        </div>
      </div>
    </>
  );
};

export default Register;
