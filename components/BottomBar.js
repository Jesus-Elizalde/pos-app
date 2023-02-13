import React from "react";

import styles from "../styles/SideBar.module.css";
import { Bars3Icon } from "@heroicons/react/20/solid";

const BottomBar = ({ states }) => {
  const [showSideBar, setShowSideBar] = states;

  return (
    <div className={styles.bottom__bar}>
      <div onClick={() => setShowSideBar(!showSideBar)}>
        <Bars3Icon className={styles.icon__size} />
      </div>
      <p>Home</p>
    </div>
  );
};

export default BottomBar;
