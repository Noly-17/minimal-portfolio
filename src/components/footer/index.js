import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { BsGithub } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import { AiOutlineSlack, AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
  return (
    <>
      <div className=" md:h-[40vh] bg-secondary flex flex-col gap-12 items-center justify-center py-10">
        <div>
          <h3 className="text-5xl md:text-7xl text-center text-primary">
            LET'S WORK TOGETHER
          </h3>
          <h4 className="text-3xl text-center text-primary pt-5">
            I'm Actively looking for opportunity
          </h4>
        </div>
        <div className="flex flex-row gap-10">
          <a href="https://www.linkedin.com/in/noly-canlas-6987a8213/">
            <CiLinkedin
              size="3rem"
              className="bg-primary rounded-full hover:bg-white cursor-pointer"
            />
          </a>
          <a href="https://github.com/Noly-17">
            <BsGithub
              size="3rem"
              className="bg-primary rounded-full hover:bg-white cursor-pointer"
            />
          </a>
          {/* <a>
            <AiOutlineSlack
              size="3rem"
              className="bg-primary rounded-full hover:bg-white cursor-pointer"
            />
          </a> */}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex items-center justify-center gap-3">
            <AiOutlineMail size="4rem" className="text-primary" />
            <h5 className="text-3xl text-primary">canlasnoly17@gmail.com</h5>
          </div>
          <div className="flex items-center justify-center gap-3">
            <TiMessages size="4rem" className="text-primary" />
            <h5 className="text-3xl text-primary">+639550412920</h5>
          </div>
        </div>
      </div>
      <div className="text-[#f3c28a] text-2xl w-full h-10 flex item-center">
        <h5 className="text-black py-3 px-6">
          © Created and Designed by Noly Canlas Jr. 2023
        </h5>
      </div>
    </>
  );
};

export default Footer;
