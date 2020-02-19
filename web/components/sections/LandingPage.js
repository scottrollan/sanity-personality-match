import React from "react";
// import Button from 'react-bootstrap/Button';
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.root}>
      <section className={styles.landing}>
        <p className={styles.heading}>Personality Match</p>
        <hr className={styles.break} />
        <p className={styles.label}>Answer a few basic questions.</p>
        <p className={styles.label}>Find your closest personality match.</p>
        <a href='/test'><button className={styles.btn}>Go To Survey</button></a>
      </section>
    </div>
  );
}

export default LandingPage;
