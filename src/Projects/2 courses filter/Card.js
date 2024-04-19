import React, { useState } from "react";

const Card = ({ card }) => {
    const info = card.description.substr(0,140);
    const [readmore,setreadmore] = useState(false);

  return (
    <div className="flex flex-col gap-5 rounded-md overflow-hidden   bg-zinc-700 w-[20rem] h-max ">
      <div>
        <img className="w-[20rem]" src={card.image.url} alt={card.title} />
      </div>

      <div className="px-3 py-1">
        <h1 className="font-semibold text-white text-[1.2rem]">{card.title}</h1>

        <p className="text-white pt-4">{readmore ? card.description : info}
                    <span onClick={()=>setreadmore(!readmore)} className="cursor-pointer text-sky-500 pl-2 transition-all duration-1000">{readmore ? 'show less' : 'read more'}</span></p>
      </div>
    </div>
  );
};

export default Card;
