import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";
import { Icon } from "../Icon/Icon";

export const Button = ({
  children,
  nameIcon,
  type = "button",
  theme,
  className,
  prefix,
  postfix,
  onClick,
  active,
  ...props
}) => {
  const blockClass = classnames(styles.button, className, {
    [styles.colorTransparent]: theme === "transparent",
    [styles.colorPrimary]: theme === "primary",
    [styles.colorSecondary]: theme === "secondary",
    [styles.active]: active,
  });

  return (
    <button className={blockClass} type={type} onClick={onClick} {...props}>
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      {children}
      {active && <Icon nameIcon="yellowDot" className={styles.icon} />}
      {postfix && <div className={styles.postfix}>{postfix}</div>}
    </button>
  );
};
