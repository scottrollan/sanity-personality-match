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
        <a href="/test">
          <button className={styles.btn}>Go To Survey</button>
        </a>
      </section>
      <div className={styles.landing} style={{ background: 'transparent'}}>
        <a
          className={styles.api}
          href="https://ilens9wa.api.sanity.io/v1/data/query/production?query=*[_type%20==%20%27person%27]"
        >
          <h5>API Personality Database hosted by Sanity.io</h5>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
