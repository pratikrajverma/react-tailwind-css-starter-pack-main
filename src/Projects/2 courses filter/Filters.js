import React from "react";

const Filters = ({ filterData, setclick, click }) => {
  function btnclickhandler(title) {
    setclick(title);
  }

  return (
    <div className="flex justify-center gap-7 text-2xl mt-5 mb-1">
      {filterData.map((filter) => {
        return (
          <button
            onClick={() => btnclickhandler(filter.title)}
            className={`bg-gray-800 py-1 px-2 rounded-md text-white border-0 ${
              click === filter.title ? "border-2 border-white" : "border-none"
            }`}
            key={filter.id}
          >
            {filter.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
