import styles from './CommunityPeak.module.css';

const CommunityPeak = () => {
   return (
      <section className={styles.container}>
         <p className={styles.heading}>
            What does the community say?
         </p>
         <div className={styles.selection}>
            <select name="" id="">
               <option value="1day">1 Day</option>
               <option value="7days">7 Days</option>
               <option value="14days">14 Days</option>
            </select>

            <div>GO</div>

            <select name="" id="">
               <option value="bitcoin">Bitcoin</option>
               <option value="ethereum">Ethereum</option>
               <option value="binancecoin">Binance Coin</option>
               <option value="hive">Hive</option>
            </select>
         </div>
         <div className={styles.results}>
            <div><p>Up</p> <p>30%</p></div>
            <div><p>Middle</p> <p>11%</p></div>
            <div><p>Down</p> <p>59%</p></div>
         </div>
      </section>
   )
}

export default CommunityPeak
