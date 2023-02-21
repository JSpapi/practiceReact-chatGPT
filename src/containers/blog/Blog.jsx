import React from "react";
import { Article } from "../../components";
import cl from "./Blog.module.scss";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
const Blog = () => {
  const blogsData = [
    {
      id: "bg2",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img: blog2,
    },
    {
      id: "bg3",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img: blog3,
    },
    {
      id: "bg4",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img: blog4,
    },
    {
      id: "bg5",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img: blog5,
    },
  ];

  return (
    <div className={[cl.root, "section__padding"].join(" ")}>
      <div className="container">
        <h2 className={[cl.title, "heading"].join(" ")}>
          A lot is happening, We are blogging about it.
        </h2>
        <div className={cl.content}>
          <div className={cl.groupA}>
            <Article
              data={{
                id: "bg1",
                title:
                  "GPT-3 and Open  AI is the future. Let us exlore how it is?",
                img: blog1,
              }}
            />
          </div>
          <div className={cl.groupB}>
            {blogsData.map((blog) => (
              <Article data={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
