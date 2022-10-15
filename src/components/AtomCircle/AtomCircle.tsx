import React from "react";
import styles from "./AtomCircle.module.css";
import logo from "../../logo.svg";

const AtomCircle: React.FC = () => {
  const orbits = [
    styles.topOrbital,
    styles.middleOrbital,
    styles.bottomOrbital,
  ];
  return (
    <div className={styles.AtomCircle}>
      <img src={logo} alt="-----"></img>
      {orbits.map((orbit) => {
        return (
          <div className={styles.orbit} id={orbit}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <circle
                cx="100"
                cy="50"
                r="25"
                stroke="black"
                stroke-width="0.5"
                fill="none"
              />
            </svg>
            <div className={styles.rotate}>
              <div className={styles.counterRotate}>
                <div className={styles.orbital} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AtomCircle;
