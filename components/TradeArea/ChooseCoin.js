import styles from "./Trade.module.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedTrade } from "../../redux_store/actions/updateSelectedTrade";
import { updateSelectedIntervalTD } from "../../redux_store/actions/updateSelectedIntervalTD";
import { updateHistoricDateForTrade } from "../../redux_store/actions/updateHistoricDataForTrade";
import { updateSelectedCurrencyTD } from "../../redux_store/actions/updateSelectedCurrency";

const ChooseCoin = () => {
  // Function to dispatch data
  const dispatch = useDispatch();
  // states
  let [sCoin, set_sCoin] = useState();
  let [sInterval, set_sInterval] = useState();
  let [sCurrency, set_sCurrency] = useState();
  let [tradeSelectedCoinData, setTradeSelectedCoinData] = useState();
  let [historicData, setHistoricData] = useState();

  const fetchCryptoDataApi = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${sCurrency}&ids=${sCoin}&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
      )
      .then(async (response) => {
        const res = await response.data[0];
        setTradeSelectedCoinData((tradeSelectedCoinData = res));
        // console.log(tradeSelectedCoinData);
        //  setIsLoading(false);
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
        //  setIsLoading(false);
        return err.message;
      });
  };

  //   Function to get daily history
  const dialyHistory = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${sCoin}/market_chart?vs_currency=${sCurrency}&days=30&interval=daily`
      )
      // await axios.get("history.json")
      // await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily")
      .then((response) => {
        const data = response.data;
        setHistoricData((historicData = data));
        // console.log(historicData);
        // console.log(data);
        // console.log(data.prices)
        // console.log(data.market_caps)
        // console.log(data.total_volumes)
      })
      .catch((err) => {});
  };

  //   Handlng GO Click
  const handleClick = async () => {
    if (sCoin && sInterval && sCurrency) {
      console.log("is Loading......");
      dispatch(updateSelectedIntervalTD(sInterval))
      dispatch(updateSelectedCurrencyTD(sCurrency))
      // Run api for history datas
      await dialyHistory();
      dispatch(updateHistoricDateForTrade(historicData));
      // Run api call for selected coin datas
      await fetchCryptoDataApi();
      dispatch(updateSelectedTrade(tradeSelectedCoinData));
      console.log("datas dispatched");
    } else{
      alert("Something went wrong! You may have left out some inputs");
    }
  };

  return (
    <div className={styles.chooseCoin}>
      <div className={styles.selectDiv}>
        <select
          name=""
          id=""
          value={sCoin}
          onChange={(e) => set_sCoin((sCoin = e.target.value))}
        >
          <option value="">Choose a Coin</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="binancecoin">Binance Coin</option>
          <option value="dogecoin">DogeCoin</option>
          <option value="dash">Dash</option>
          <option value="reserverighttoken">RSR</option>
          <option value="safemoon">SafeMoon</option>
          <option value="hive">Hive</option>
        </select>

        <select
          name=""
          id=""
          value={sInterval}
          onChange={(e) => set_sInterval((sInterval = e.target.value))}
        >
          <option value="">Choose Interval</option>
          <option value="1day">1 Day</option>
          <option value="7days">7 Days</option>
          {/* <option value="14days">14Days</option> */}
        </select>

        <select
          name=""
          id=""
          value={sCurrency}
          onChange={(e) => set_sCurrency((sCurrency = e.target.value))}
        >
          <option value="">Choose Currency</option>
          <option value="ngn">Naira</option>
          <option value="usd">United States Dollar</option>
        </select>
      </div>
      <button onClick={handleClick}>Go</button>
    </div>
  );
};

export default ChooseCoin;
