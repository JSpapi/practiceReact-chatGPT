import React from "react";
import { Feature } from "../../components";
import cl from "./WhatGPT3.module.scss";
const WhatGPT3 = () => {
  const whatsGPTData = [
    {
      id: 1,
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      id: 2,
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b ",
    },
    {
      id: 3,
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  return (
    <div className={[cl.root, "section__padding"].join(" ")} id="wgpt">
      <div className="container">
        <div className={cl.content}>
          <div className={cl.feature__header}>
            <Feature
              data={{
                id: 0,
                title: "What is GPT-3",
                text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
              }}
            />
          </div>

          <div className={cl.title}>
            <h2 className="section__title">
              The possibilities are beyond your imagination
            </h2>
            <p className="section__subtitle">Explore The Library</p>
          </div>
          <div className={cl.feature__bottom}>
            {whatsGPTData.map((feature) => (
              <Feature key={feature.id} data={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
