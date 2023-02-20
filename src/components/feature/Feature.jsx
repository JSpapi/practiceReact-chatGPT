import React from "react";
import cl from "./Feature.module.scss";
const Feature = ({ data, ...props }) => {
  return (
    <article className={cl.feature} {...props}>
      <h4 className={cl.title}>{data.title}</h4>
      <p className={cl.text}>{data.text}</p>
    </article>
  );
};

export default Feature;
