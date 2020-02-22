import React from 'react'
import styles from './PersonModal.module.css'

const PersonModal = (props) => {

    return (
        <div className={styles.container} id="modal" style={{ display: props.display }}>
            <div id={styles.modalContent}>
                <h4>James T. Kirk</h4>
                <img src='https://cdn.sanity.io/images/ilens9wa/production/ee2d0e1596931c9de6895c8afb0aac53ffe04e05-611x865.jpg?h=200&fit=max' alt=''></img>
                <h5>Captain</h5>
                <h6>U.S.S. Enterprise</h6>
                <button onClick={props.closeModal}>Close</button>
            </div>
        </div>
    )
}

export default PersonModal