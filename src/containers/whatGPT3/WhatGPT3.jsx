import React from "react";
import Features from "../features/Features";
import cl from "./WhatGPT3.module.scss";
const WhatGPT3 = () => {
  return (
    <div className={cl.root}>
      <div className="container">
        <div className={cl.content}>
          <div className={cl.feature__header}>
            <Features
              title="What is GPT-3"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            />
          </div>

          <div className={cl.title}>
            <h2 className="gradinet__text">
              The possibilities are beyond your imagination
            </h2>
            <p>Explore The Library</p>
          </div>
          <div className={cl.feature__bottom}>
            <Features
              title="Chatbots"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            />
            <Features
              title="Knowledgebase"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
            <Features
              title="Education"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
