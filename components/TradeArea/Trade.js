import styles from './Trade.module.css';
import Header from '../Header/Header';
import ChooseCoin from './ChooseCoin';
import CurrentPrice from './CurrentPrice';
import Scan from './Scan';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Trade = () => {
   return (
      <section className={styles.container}>
         <Sidebar />
         <Header />
        <div className={styles.mobile}>
         <section className={styles.firstLayer}>
            <ChooseCoin />
         </section>
         <CurrentPrice />
            <Scan />
            </div>
            <Footer />
      </section>
   )
}

export default Trade
