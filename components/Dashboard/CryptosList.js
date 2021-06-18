import styles from "./CryptoList.module.css";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";

const CryptosList = ({ currentPrice }) => {
  const mountedBtc = useSelector((state) => state.mountedBtcReducer.mountedBtc);
  const mountedEth = useSelector((state) => state.mountedEthReducer.mountedEth);
  const mountedBnb = useSelector((state) => state.mountedBnbReducer.mountedBnb);
  let [colorBtcPercent, setColorBtcPercent] = useState("");
  let [colorBtcPrice, setColorBtcPrice] = useState("");
  let [colorEthPercent, setColorEthPercent] = useState("");
  let [colorEthPrice, setColorEthPrice] = useState("");
  let [colorBnbPercent, setColorBnbPercent] = useState("");
  let [colorBnbPrice, setColorBnbPrice] = useState("");

  const coloringbtcpercent = {
    color: colorBtcPercent,
  };

  const coloringbtcprice = {
    color: colorBtcPrice,
  };

  const coloringethpercent = {
    color: colorEthPercent,
  };

  const coloringethprice = {
    color: colorEthPrice,
  };

  const coloringbnbpercent = {
    color: colorBnbPercent,
  };

  const coloringbnbprice = {
    color: colorBnbPrice,
  };

  const assigningColors = () => {
    mountedBtc.price_change_percentage_24h < 0
      ? setColorBtcPercent("red")
      : setColorBtcPercent("green");
    mountedBtc.price_change_24h < 0
      ? setColorBtcPrice("red")
      : setColorBtcPrice("green");
    mountedEth.price_change_percentage_24h < 0
      ? setColorEthPercent("red")
      : setColorEthPercent("green");
    mountedEth.price_change_24h < 0
      ? setColorEthPrice("red")
      : setColorEthPrice("green");
    mountedBnb.price_change_percentage_24h < 0
      ? setColorBnbPercent("red")
      : setColorBnbPercent("green");
    mountedBnb.price_change_24h < 0
      ? setColorBnbPrice("red")
      : setColorBnbPrice("green");
  };

  useMemo(() => {
    assigningColors();
  }, [mountedBnb, mountedBtc, mountedEth]);
  console.log(mountedBnb);
  return (
    <section className={styles.container}>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        </style>
      </Head>
      <div className={styles.cryptoContainer}>
        <div className={styles.coinID}>
          <div>
            <img src={mountedBtc.image} alt="" />
          </div>
          <p className={styles.coinName}>Bitcoin</p>
        </div>
        <div className={styles.prices}>
          <p className={styles.currentPrice}>
            Current Price:{" "}
            <span>
              $
              {mountedBtc.current_price
                ? mountedBtc.current_price.toLocaleString()
                : null}
            </span>
          </p>
          <p>
            24hr Percent Change:{" "}
            <span style={coloringbtcpercent}>
              {mountedBtc.price_change_percentage_24h
                ? mountedBtc.price_change_percentage_24h.toFixed(2)
                : null}{" "}
              %
            </span>
          </p>
          <p>
            24hr Price Change:{" "}
            <span style={coloringbtcprice}>
              $
              {mountedBtc.price_change_24h
                ? mountedBtc.price_change_24h.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : null}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.cryptoContainer}>
        <div className={styles.coinID}>
          <div>
            <img src={mountedEth.image} alt="" />
          </div>
          <p className={styles.coinName}>Ethereum</p>
        </div>
        <div className={styles.prices}>
          <p className={styles.currentPrice}>
            Current Price:{" "}
            <span>
              $
              {mountedEth.current_price
                ? mountedEth.current_price.toLocaleString()
                : null}
            </span>
          </p>
          <p>
            24hr Percent Change:{" "}
            <span style={coloringethpercent}>
              {mountedEth.price_change_percentage_24h
                ? mountedEth.price_change_percentage_24h.toFixed(2)
                : null}{" "}
              %
            </span>
          </p>
          <p>
            24hr Price Change:{" "}
            <span style={coloringethprice}>
              $
              {mountedEth.price_change_24h
                ? mountedEth.price_change_24h.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : null}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.cryptoContainer}>
        <div className={styles.coinID}>
          <div>
            <img src={mountedBnb.image} alt="" />
          </div>
          <p className={styles.coinName}>Binance Coin</p>
        </div>
        <div className={styles.prices}>
          <p className={styles.currentPrice}>
            Current Price:{" "}
            <span>
              $
              {mountedBnb.current_price
                ? mountedBnb.current_price.toLocaleString()
                : null}
            </span>
          </p>
          <p>
            24hr Percent Change:{" "}
            <span style={coloringbnbpercent}>
              {mountedBnb.price_change_percentage_24h
                ? mountedBnb.price_change_percentage_24h.toFixed(2)
                : null}{" "}
              %
            </span>
          </p>
          <p>
            24hr Price Change:{" "}
            <span style={coloringbnbprice}>
              $
              {mountedBnb.price_change_24h
                ? mountedBnb.price_change_24h.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : null}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptosList;
