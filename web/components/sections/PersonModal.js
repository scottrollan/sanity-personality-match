import React from "react";
import styles from "./PersonModal.module.css";

const PersonModal = props => {
  return (
    <div className={styles.container} id="modal" style={{ display: props.display }}>
      <div id={styles.modalContent}>
        <h3>Your Closest Match</h3>
        <h4>{props.name}</h4>
        <img
          src={`https://cdn.sanity.io/images/ilens9wa/production/${props.src}?h=200&fit=max`}
          alt=""
          style={{ maxWidth: '100%' }}
        />
        <h5>{props.title}</h5>
        <h6>{props.org}</h6>
        <div className={styles.scoreDiv}>
          <h6 className={styles.h6}>{props.name}'s personality quotient:</h6> 
          <h6 className={styles.h6}>{Math.round(props.score * 3.14)}</h6>
        </div>
        <div className={styles.scoreDiv}>
          <h6 className={styles.h6}>Your personality quotient: </h6>
          <h6 className={styles.h6}> {Math.round(props.myScore * 3.14)} </h6>
        </div>
        <button className={styles.btn} onClick={props.closeModal}>Close</button>
      </div>
    </div>
  );
};

export default PersonModal;
