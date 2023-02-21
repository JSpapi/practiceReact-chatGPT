import React from "react";
import cl from "./Article.module.scss";
const Article = ({ data }) => {
  const { img, title } = data;
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <article className={cl.blog}>
      <div className={cl.header}>
        <img src={img} alt={title} />
      </div>
      <div className={cl.body}>
        <div className={cl.info}>
          <p className={cl.date}>
            {[months[date.getMonth()], date.getDate(), date.getFullYear()].join(
              " "
            )}
          </p>
          <h4 className={cl.title}>{title}</h4>
        </div>
        <a href="#!" className={cl.readMore}>
          Read Full Article
        </a>
      </div>
    </article>
  );
};

export default Article;
