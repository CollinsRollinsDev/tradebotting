import styles from "./Header.module.css";
import Head from "next/head";
import { useState, useEffect } from 'react';
import Menus from "../DropdownMenu/Menus";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <section className={styles.container}>
      <Head>
        <script
          src="https://kit.fontawesome.com/e9c6405bac.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className={styles.siteName}>
        TradeBotting <span>v 1.5</span>
      </div>

      <div className={styles.quickLink}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75%"
            height="75%"
            viewBox="0 0 24 24"
          >
            <path d="M20.667 14c1.781 0 3.333-.671 3.333-1.5s-1.552-1.5-3.333-1.5c-1.781 0-3.333.671-3.333 1.5s1.551 1.5 3.333 1.5zm.062-1.34c-.199-.06-.81-.111-.81-.45 0-.189.223-.358.639-.396v-.148h.214v.141c.156.004.33.021.523.06l-.078.229c-.147-.034-.311-.066-.472-.066l-.048.001c-.321.013-.347.191-.125.267.364.112.844.195.844.493 0 .238-.289.366-.645.397v.146h-.214v-.139c-.22-.002-.451-.038-.642-.102l.098-.229c.163.042.367.084.552.084l.139-.01c.247-.034.296-.199.025-.278zm-.062 5.34c1.261 0 2.57-.323 3.333-.934v.434c0 .829-1.552 1.5-3.333 1.5-1.781 0-3.333-.671-3.333-1.5v-.434c.763.611 2.071.934 3.333.934zm0-3.333c1.261 0 2.57-.323 3.333-.934v.434c0 .829-1.552 1.5-3.333 1.5-1.781 0-3.333-.671-3.333-1.5v-.434c.763.611 2.071.934 3.333.934zm0 1.666c1.261 0 2.57-.323 3.333-.935v.435c0 .828-1.552 1.5-3.333 1.5-1.781 0-3.333-.672-3.333-1.5v-.435c.763.612 2.071.935 3.333.935zm-12.167-3.833c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5zm3.236-1.14l-.09.411c-.192-.067-.405-.128-.611-.116-.372.022-.405.344-.145.479.428.201.985.35.985.886.001.429-.334.659-.749.716v.264h-.251v-.25c-.259-.004-.526-.066-.749-.181l.113-.411c.239.092.558.191.807.135.287-.065.346-.36.028-.503-.233-.108-.944-.201-.944-.811 0-.341.261-.646.746-.713v-.266h.251v.254c.179.005.382.037.609.106zm6.264-5.36h-17v10h-1v-11h18v1zm2 1v2.834c-.715.059-1.401.214-2 .458v-1.292h-14v7h12v2h-14v-11h18z" />
          </svg>
        </div>
        <div className={styles.profileDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
          </svg>
        </div>
      </div>

      <div onClick={handleClick} className={styles.menuDiv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
        </svg>
      </div>

      <style jsx>
        {`
          .fa-user-circle {
            height: 40px;
            width: 40px;
          }
          .fa-bars {
            font-size: 23px;
          }
        `}
      </style>
      {
        toggle ? <Menus toggle={toggle}/> : null
      }
    </section>
  );
};

export default Header;
