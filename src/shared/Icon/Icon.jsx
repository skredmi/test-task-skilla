import React from "react";
import { icons } from "../../assets/icons/index";

export const Icon = ({ nameIcon, className }) => {
  const IconComponent = icons[nameIcon];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
};
