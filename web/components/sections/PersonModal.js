import React from "react";
import styles from "./PersonModal.module.css";

const PersonModal = props => {
  return (
    <div className={styles.container} id="modal" style={{ display: props.display }}>
      <div id={styles.modalContent}>
        <h3>Your Closest Match</h3>
        <h3>{props.name}</h3>
        <img
          src={`https://cdn.sanity.io/images/ilens9wa/production/${props.src}?h=200&fit=max`}
          alt=""
          style={{ maxWidth: '100%' }}
        />
        <h5>{props.title} - {props.org}</h5>
        <div className={styles.scoreDiv}>
          <h4 className={styles.scoreLetters}>{props.name}'s personality quotient:</h4> 
          <h4 className={styles.scoreNumbers}>{Math.round(props.score * 3.14)}</h4>
        </div>
        <div className={styles.scoreDiv}>
          <h4 className={styles.scoreLetters}>Your personality quotient: </h4>
          <h4 className={styles.scoreNumbers}> {Math.round(props.myScore * 3.14)} </h4>
        </div>
        <button className={styles.btn} onClick={props.closeModal}>Close</button>
      </div>
    </div>
  );
};

export default PersonModal;
