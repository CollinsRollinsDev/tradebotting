import styles from "./Trade.module.css";
import { useState, useEffect } from "react";
import CalcSurface from "./CalcSurface";

const Scan = () => {
  let [displayButtons, setDisplayButtons] = useState(true);
  let [surfaceState, setSurfaceState] = useState(false)
  let [deepState, setDeepState] = useState(false)

  const handleSurface = () => {
    setDisplayButtons(false);
    setSurfaceState(true);
  };
  const handleDeep = () => {
    setDisplayButtons(false);
    setDeepState(true);
  };

  const btns = (
    <div className={styles.scanBtns}>
      <button onClick={handleSurface}>Surface Scan</button>
      <button onClick={handleDeep}>Deep Scan</button>
    </div>
  );

  return (
    <section className={styles.scanBox}>
      {
        displayButtons ? btns : <CalcSurface buttons={displayButtons} theState={surfaceState} />
      }
    </section>
  );
};

export default Scan;
