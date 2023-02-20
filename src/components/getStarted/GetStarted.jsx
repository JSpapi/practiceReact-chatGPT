import React from "react";
import cl from "./GetStarted.module.scss";
const GetStarted = () => {
  return (
    <div className={[cl.root, "section__padding"].join(" ")}>
      <div className="container">
        <div className={cl.content}>
          <div className={cl.info}>
            <p>Request Early Access to Get Started</p>
            <h4>Register today & start exploring the endless possiblities.</h4>
          </div>
          <div className={cl.btn}>
            <button className={cl.getStarted}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
