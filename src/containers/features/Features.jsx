import React from "react";
import cl from "./Features.module.scss";

const Features = ({ title, text, ...props }) => {
  return (
    <article className={cl.feature} {...props}>
      <h4 className={cl.title}>{title}</h4>
      <p className={cl.text}>{text}</p>
    </article>
  );
};

export default Features;
