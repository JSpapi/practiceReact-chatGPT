import React, { useState } from "react";
import cl from "./Header.module.scss";
import ai from "../../assets/header-ai.png";
import people from "../../assets/header-people.png";
const Header = () => {
  const [value, setValue] = useState("");

  return (
    <div className={cl.root}>
      <div className="container">
        <div className={cl.content}>
          <div className={cl.info}>
            <h1 className={[cl.title, "heading"].join(" ")}>
              Let's Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className={cl.text}>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>

            <div className={cl.getEmail}>
              <input
                type="text"
                placeholder="Your Email Address"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />

              <button>Get Started</button>
            </div>

            <div className={cl.people}>
              <img src={people} alt="people" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div className={cl.aiImg}>
            <img src={ai} alt="AI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
