import React from "react";
import classnames from "classnames";
import { Icon } from "../Icon/Icon";
import styles from "./Filter.module.css";

export const Filter = ({
  children,
  hasIcon,
  onClick,
  direction,
  className,
}) => {
  const iconClass = classnames({
    [styles.iconReverse]: direction,
  });
  return (
    <div
      className={classnames(styles.field, className)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      {children}
      {hasIcon && <Icon nameIcon="arrow" className={iconClass} />}
    </div>
  );
};
