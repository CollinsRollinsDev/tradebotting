import styles from "./Trade.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";


const CurrentPrice = () => {
  // Retrive datas from redux store
  const coinData = useSelector((state) => state.selectedTradeReducer.selectedTrade);
  const selectedCurrency = useSelector((state) => state.selectedCurrencyTD_Reducer.selectedCurrency);
 
  // console.log(coinData);
  // states
  let [colorPercent, setColorPercent] = useState('');
  let [colorPrice, setColorPrice] = useState('');
  let [currency, setCurrency] = useState('');

  const settingPriceColor = {
    color: colorPrice
  }
  const settingPercentColor = {
    color: colorPercent
  }

  const assignColors = () => {
    coinData.price_change_percentage_24h < 0 ? setColorPercent('red') : setColorPercent('green')
    coinData.price_change_24h < 0 ? setColorPrice('red') : setColorPrice('green');
    selectedCurrency == 'usd' ? setCurrency('$') : setCurrency('₦');
    
  }

  useEffect(() => {
    assignColors();
  }, [coinData.price_change_24h, coinData.price_change_percentage_24h])

  return (
    <div className={styles.cryptoContainer}>
      <div className={styles.coinID}>
      
          <img src={coinData.image} alt="" />
        
        <p className={styles.coinName}>{coinData.name}</p>
      </div>
      <div className={styles.prices}>
        <p className={styles.currentPrice}>
          Current Price: <span>{currency}{coinData.current_price ? coinData.current_price.toLocaleString() : null}</span>
        </p>
        <p>
          Market Cap: <span>{currency}{coinData.market_cap ? coinData.market_cap.toLocaleString() : null}</span>
        </p>
        <p>
          24hr Percent Change: <span style={settingPriceColor}>{coinData.price_change_percentage_24h ? coinData.price_change_percentage_24h.toFixed(2) : null}%</span>
        </p>
        <p>
          24hr Price Change: <span style={settingPercentColor}>{currency}{coinData.price_change_24h ? coinData.price_change_24h.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) : null}</span>
        </p>
        
      </div>
    </div>
  );
};

export default CurrentPrice;
