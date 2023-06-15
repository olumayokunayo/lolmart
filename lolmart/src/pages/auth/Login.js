import React, { useState } from "react";
import LoginImage from "../../assets/login.png";
import styles from "./Auth.module.scss";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "../../component/card/Card";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <div className={styles["auth-div"]}>
        <div className={styles.imageDiv}>
          <img src={LoginImage} alt="Login" width={400} />
        </div>
        <div className={styles["auth-form"]}>
        <Card>
        <h1>Login</h1>
          <form onSubmit={loginHandler}>
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
            <button type="submit">Login</button>
            <p> -- or -- </p>
          </form>
      
         
         
          <button type="submit" className={styles.googleBtn}>
            Sign in with Google 
            <AiOutlineGoogle size={20}/>
          </button>
          <div className={styles.register}>
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
          </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
