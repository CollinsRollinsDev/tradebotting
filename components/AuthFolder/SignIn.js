import styles from "./SignIn.module.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={styles.container}>
      <Sidebar />
      <Header />

      <div className={styles.mobile}>
        <h1 className={styles.mobileHead}>Welcome Back to TradeBotting</h1>
        <form onSubmit method="post">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className={styles.outro}>
          <p>Forgotten Password?</p>
          <p>
            Don't Have an account? <span>Sign up</span>
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

export default SignIn;
