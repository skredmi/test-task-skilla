import React from "react";
import styles from "./Info.module.css";
import { Button } from "../../shared/Button/Button";
import { Icon } from "../../shared/Icon/Icon";

export const Info = () => {
  return (
    <div>
      <div className={styles.info}>
        <div className={styles.infoSum}>
          <div>
            Баланс: <span className={styles.sum}>272 ₽</span>
          </div>
          <Button className={styles.infoButton} theme="transparent">
            <Icon nameIcon="plus" className={styles.infoIcon} />
          </Button>
        </div>
        <Button theme="transparent" className={styles.date}>
          <Icon nameIcon="arrow" className={styles.leftArrow} />
          <Icon nameIcon="calendar" /> 3 дня
          <Icon nameIcon="arrow" className={styles.rightArrow} />
        </Button>
      </div>
    </div>
  );
};
