import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Link } from "react-router-dom";

const Card = ({ title, author, category, date, content, tags, id }) => {
  const { brightBtn } = useContext(AppContext);

  return (
    <div
      className={`${
        brightBtn ? "bg-gray-300 text-black" : "bg-black text-white"
      } border p-2 `}
    >
      <Link to={`/blogs/${id}`}>
        <p className="font-bold underline">{title}</p>
      </Link>

      <p>
        By <span>{author}</span> on
        <Link to={`/categories/${category.replaceAll(" ", "-")}`}>
          <span className="text-xl font-semibold hover:text-red-400 text-red-600">
            {category}
          </span>
        </Link>
      </p>
      <p>Published on: {date}</p>
      <p>{content}</p>
      <div className="p-2 border-2  overflow-hidden bg-gray-200">
        {tags.map((tag, index) => (
          <Link key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-500 font-mono mr-8 underline">
              #{tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
