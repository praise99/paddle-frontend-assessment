import React from "react";
import styles from "./Modal.module.css";
import Contact from "../contact";
const Modal = ({ setIsOpen }: any) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.closedButton} onClick={() => setIsOpen(false)}>
        <p className={styles.line}>&rarr;</p>
      </div>
      <div className={styles.centered}>
        <div className={styles.modal}>
          {/* <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div> */}
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <div style={{ marginBottom: "-3px" }}></div>
          </button>
          <div className={styles.modalContent}>
            <Contact />
          </div>
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
