import React from "react";
import cl from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
// !footer sicial links component
import { FooterList } from "../../components";

const Footer = () => {
  const footerLists = [
    {
      id: "list1",
      title: "Links",
      links: ["Overons", "Social Media", "Counters", "Contact"],
    },
    {
      id: "list2",
      title: "Company",
      links: ["Terms & Conditions", "Privacy Policy Media", "Contact"],
    },
    {
      id: "list3",
      title: "Get in touch",
      links: [
        "Crechterwoord K12 182 DK Alknjkcb",
        "085-132567 Media",
        "info@payme.net",
      ],
    },
  ];
  return (
    <div className={cl.root}>
      <div className="container">
        <div className={cl.content}>
          <div className={cl.header}>
            <h2 className="heading">
              Do you want to step in to the future before others
            </h2>
            <button>Request Early Access</button>
          </div>
          <div className={cl.body}>
            <div className={cl.body__logo}>
              <a href="#!">
                <img src={logo} alt="logo" />
                <span>
                  Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </span>
              </a>
            </div>
            <div className={cl.body__links}>
              {footerLists.map((list) => (
                <FooterList key={list.id} data={list} />
              ))}
            </div>
          </div>
          <div className={cl.copy}>
            <p>
              {new Date().getFullYear()} GPT-3 by Axror Kurban using reactJS for
              educational purpose
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
