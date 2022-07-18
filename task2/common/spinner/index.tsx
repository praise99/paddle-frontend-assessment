import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <h6 className={styles.spin}></h6>
    </div>
  );
};

export { Spinner };
