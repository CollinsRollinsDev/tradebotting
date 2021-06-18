import Header from "../Header/Header";
import styles from "./Dashboard.module.css";
import CryptosList from "./CryptosList";
import BotInfo from "./BotInfo";
import Head from "next/head";
import Records from "./Records";
import { useState, useEffect } from "react";
import CommunityPeak from "./CommunityPeak";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateMountedBtcData } from "../../redux_store/actions/mountedBtcData";
import { updateMountedEthData } from "../../redux_store/actions/mountedEthData";
import { updateMountedBnbData } from "../../redux_store/actions/mountedBnbData";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  let [bitcoinData, setBitcoinData] = useState();
  let [ethData, setEthData] = useState();
  let [bnbData, setBnbData] = useState();

  const dispatch = useDispatch();

  const getCryptoData = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
      )
      .then(async (response) => {
        const res = await response.data[0];
        setBitcoinData((bitcoinData = res));
        dispatch(updateMountedBtcData(bitcoinData));
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        // alert(err.message);
        return err.message;
      });

    // ethereum
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
      )
      .then(async (response) => {
        const res = await response.data[0];
        setEthData((ethData = res));
        dispatch(updateMountedEthData(ethData));
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        // alert(err.message);
        return err.message;
      });

    // Binance
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
      )
      .then(async (response) => {
        const res = await response.data[0];
        setBnbData((bnbData = res));
        dispatch(updateMountedBnbData(bnbData));
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        alert("Error getting data. Check your internet connection.");
        return err.message;
      });
  };

  useEffect(() => {
    getCryptoData();
  }, []);

  const handleClick = () => {
    // set the toggle button side
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section className={styles.container}>
      <Head>
        <script
          src="https://kit.fontawesome.com/e9c6405bac.js"
          crossorigin="anonymous"
        ></script>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
        </style>
      </Head>
      {/* <div> */}
      <Sidebar />
      <Header />
      <div className={styles.mobile}>
        <CryptosList />
        {/* </div> */}
        <div className={styles.infoBtn} onClick={handleClick}>
          <p>Show Quick Guide</p>{" "}
          {toggle ? (
            <div className={styles.arrowDiv}>
               <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
            </svg>
            </div>
           
          ) : (
            <div className={styles.arrowDiv}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
            >
              <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
            </svg>
            </div>
          )}
        </div>
        {toggle ? <BotInfo /> : null}

        <style jsx>
          {`
            .fa-sort-down {
              margin-left: 20px;
              font-size: 27px;
              margin-top: -10px;
            }
            .fa-sort-up {
              margin-left: 20px;
              font-size: 27px;
              margin-top: 10px;
            }
            .fa-sort-down:hover,
            .fa-sort-up:hover {
              opacity: 0.7;
            }
            .fa-sort-down:active,
            .fa-sort-up:active {
              opacity: 0.1;
            }
          `}
        </style>
        <Records />
        <CommunityPeak />
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;
