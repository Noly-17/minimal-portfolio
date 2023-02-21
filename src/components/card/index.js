import React from 'react';

const Card = ({ srcImage, char }) => {
  return (
    // <div className="bg-primary h-[280px] w-[170px] md:w-[200px] rounded-[30px] z-4 flex items-center justify-center flex-col shadow-2xl gap-10">
    //   <div className="m-2 py-5 rounded-[30px] bg-white">
    //     <img className="p-1 rounded-[30px]" src={srcImage} />
    //   </div>
    //   <h3 className="text-3xl text-center">{char}</h3>
    // </div>
    <div
      className="bg-primary p-5  rounded-2xl shadow-2xl h-[200px] md:h-[380px] md:w-[300px] flex flex-col items-center justify-center gap-7 md:gap-20"
      data-aos="flip-left"
    >
      <div className="self-center bg-white max-h-[220px] rounded-[30px]">
        <img className="p-1 rounded-[30px]" src={srcImage} />
      </div>
      <p className="text-2xl max-w-smallWidthChar text-center">{char}</p>
    </div>
  );
};

export default Card;
