import React from "react";
import cl from "./FooterList.module.scss";
const FooterList = ({ data }) => {
  const { title, links } = data;
  return (
    <div className={cl.root}>
      <h4 className={cl.title}>{title}</h4>
      <ul className={cl.list}>
        {links.map((link) => (
          <li key={link}>
            <a href="#!" className={cl.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
