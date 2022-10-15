import React from "react";
import styles from "./AtomCircle.module.css";

const AtomCircle: React.FC = () => {
  const orbits = [
    styles.topOrbital,
    styles.middleOrbital,
    styles.bottomOrbital,
  ];
  return (
    <div className={styles.AtomCircle}>
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
