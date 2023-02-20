import React from "react";
import cl from "./Brand.module.scss";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
const Brand = () => {
  const imgsArray = [google, slack, atlassian, dropbox, shopify];

  return (
    <div className={[cl.root, "section__padding"].join(" ")}>
      <div className="container">
        <div className={cl.brands}>
          {imgsArray.map((img) => (
            <div className={cl.singleBrand} key={img}>
              <img src={img} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
