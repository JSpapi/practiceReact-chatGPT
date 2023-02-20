import React from "react";
import { Feature } from "../../components";
import cl from "./Features.module.scss";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: 2,
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: 3,
      title: "Message or am nothing ",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: 4,
      title: "Really boy law county ",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <div className={cl.root} id="features">
      <div className="container">
        <div className={cl.content}>
          <div className={cl.heading}>
            <h2 className="section__title">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h2>
            <p className="section__subtitle">
              Request Early Access to Get Started
            </p>
          </div>
          <div className={cl.features}>
            {featuresData.map((feature) => (
              <Feature
                key={feature.id}
                data={feature}
                style={{ marginBottom: "1rem" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
