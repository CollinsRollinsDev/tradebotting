import styles from "./SignUp.module.css";
import Header from "../Header/Header";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCOnfirmPassowrd] = useState("");

  return (
    <section className={styles.container}>
      <Sidebar />
      <Header />
      <div className={styles.mobile}>
        <h1 className={styles.mobileHead}>Welcome to TradBotting</h1>
        <form onSubmit method="post">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>

        <div className={styles.outro}>
          {/* <p>Forgotten Password?</p> */}
          <p>
            Have an account? <span>Sign in</span>
          </p>
        </div>

        <section className={styles.footer}>
          <p>@ 2021 Collins Rollins</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </section>
      </div>
    </section>
  );
};

export default SignUp;
