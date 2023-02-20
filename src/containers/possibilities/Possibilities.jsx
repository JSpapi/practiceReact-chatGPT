import React from "react";
import cl from "./Possibilities.module.scss";
import possibilities from "../../assets/possibilities.png";

const Possibilities = () => {
  return (
    <div className={[cl.root, "section__padding"].join(" ")} id="possibilities">
      <div className="container">
        <div className={cl.content}>
          <div className={cl.content__img}>
            <img src={possibilities} alt="possibilities" />
          </div>
          <div className={cl.content__info}>
            <p
              className="section__subtitle"
              style={{ color: "#71E5FF", marginBottom: 10 }}
            >
              Request Early Access to Get Started
            </p>
            <h4 className="section__title">
              The possibilities are beyond your imagination
            </h4>
            <p className={cl.text}>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <p className="section__subtitle">
              Request Early Access to Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
