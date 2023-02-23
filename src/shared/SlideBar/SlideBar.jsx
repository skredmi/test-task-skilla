import React from "react";
import classnames from "classnames";
import styles from "./SlideBar.module.css";

export const SlideBar = ({ children, count, theme }) => {
  const blockClass = classnames({
    [styles.goodColor]: theme === "good",
    [styles.mediumColor]: theme === "medium",
    [styles.badColor]: theme === "bad",
  });
  const slideBarClass = classnames(styles.slideBar, {
    [styles.slideBarGoodColor]: theme === "good",
    [styles.slideBarMediumColor]: theme === "medium",
    [styles.slideBarBadColor]: theme === "bad",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        {children} <span className={blockClass}>{count}</span>
      </div>
      <div className={slideBarClass}></div>
    </div>
  );
};
