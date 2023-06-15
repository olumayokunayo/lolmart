import React, { useState } from "react";
import styles from "./Auth.module.scss";
import ResetImage from "../../assets/forgot.png";
import Card from "../../component/card/Card";
import { Link } from "react-router-dom";
const Reset = () => {
  const [email, setEmail] = useState("");

  const resetHandler = (e) => {
    e.preventDefault();

  };
  return (
    <>
      <div className={styles["auth-div"]}>
        <div>
          <img src={ResetImage} alt="Login" width={400} />
        </div>
        <div className={styles["auth-form"]}>
          <Card>
            <h1>Reset</h1>
            <form onSubmit={resetHandler}>
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Reset</button>
            </form>

            <div className={styles.active}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Reset;
