import React from "react";
import "./Box.css";
import { useTranslation } from "react-i18next";

const Box = ({ children, className }) => {
  const { t } = useTranslation();
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
