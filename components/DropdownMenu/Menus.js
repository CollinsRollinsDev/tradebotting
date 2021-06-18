import styles from './Menus.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Menus = ({toggle}) => {
   const [width, setWidth] = useState()

   const menuWidth = {
      width:width,
      // transitionDuration: "1.4s",
      // transitionProperty: "width",
      // transitionTimingFunction: "linear",
   }

   const changeWidth = () => {
      toggle ? setWidth('100%') : setWidth('0%');
   }

   useEffect(() => {
   changeWidth();
   }, [toggle])

   return (
      <section style={menuWidth} className={styles.container}>
         <div className={styles.menuArea}>
            <Link href="/">
            <div>Dashboard</div>
            </Link>
            <Link href="/tradearea">
            <div>Trade Area</div>
            </Link>
            {/* <Link href="/billing"> */}
            <div>Billing</div>
            {/* </Link> */}
            {/* <Link href="/settings"> */}
            <div>Settings</div>
            {/* </Link> */}
            {/* <Link href="/signout"> */}
            <div>Sign Out</div>
            {/* </Link> */}
    
         </div>
      </section>
   )
}

export default Menus
