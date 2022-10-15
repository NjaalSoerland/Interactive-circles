import React from "react";
import styles from "./AtomCircle.module.css";
import logo from "../../logo.svg";

const AtomCircle: React.FC = () => {
  const orbits = [
    styles.topOrbital,
    styles.upperMiddleOrbital,
    styles.middleOrbital,
    styles.lowerMiddleOrbital,
    styles.bottomOrbital,
  ];
  return (
    <div className={styles.AtomCircle}>
      <img src={logo} alt="-----"></img>
      {orbits.map((orbit) => {
        return (
          <div className={styles.orbit} id={orbit}>
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
