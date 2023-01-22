import React from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { CubeIcon } from "@heroicons/react/20/solid";
import { Squares2X2Icon } from "@heroicons/react/20/solid";
import { CreditCardIcon } from "@heroicons/react/20/solid";

const SideNavbar = () => {
  return (
    <div className={styles.sb__container}>
      <Link href="/">
        <div className="fr">
          <p>Dashbaord</p>
          <Squares2X2Icon className={styles.icon__size} />
        </div>
      </Link>
      <Link href="/inventory">
        <div className="fr">
          <p>Inventory</p>
          <CubeIcon className={styles.icon__size} />
        </div>
      </Link>
      <Link href="/sale">
        <div className="fr">
          <p>Sale</p>
          <CreditCardIcon className={styles.icon__size} />
        </div>
      </Link>
    </div>
  );
};

export default SideNavbar;
