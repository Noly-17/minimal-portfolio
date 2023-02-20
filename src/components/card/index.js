import React from 'react';

const Card = ({ srcImage, char }) => {
  return (
    <div className="bg-primary h-[350px] w-[170px] md:w-[200px] rounded-xl border-2 z-40 border-white flex items-center justify-center flex-col shadow-2xl">
      <div className="m-2 p-2 rounded-[30px] bg-white">
        <img className="p-1 rounded-[30px]" src={srcImage} />
      </div>
      <h3 className="text-3xl text-center">{char}</h3>
    </div>
  );
};

export default Card;
