import React from "react";
import styles from "./HologramCircle.module.css";
import logo from "../../logo.svg";

const HologramCircle: React.FC = () => {
  return (
    <div className={styles.HologramCircle}>
      <img src={logo} alt="insert alt here"></img>
    </div>
  );
};

export default HologramCircle;
