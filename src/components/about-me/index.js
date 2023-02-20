import React from 'react';
import { images } from '../../assets';
import { AiOutlineTeam } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import './styles.scss';

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="flex flex-col items-center justify-center  bg-gradient-to-r from-[#838295] to-secondary"
    >
      <div className=" flex flex-col md:flex-row items-center justify-center gap-10 md:pt-52 pt-[80px]">
        <div className="floating-image-container w-full flex items-center justify-center max-w-full">
          <img
            src={images.gradPic}
            className="rounded-[50%] w-[270px] h-[290px] md:w-[450px] md:h-[550px]  border-4 border-white drop-shadow-4xl"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-12">
          <div className="text-white w-full">
            <h3 className="text-white text-5xl mb-10 text-center">About Me</h3>

            <h4 className="text-white text-3xl max-w-readable text-center">
              I am a software developer who has worked for over a year, and I
              have a practical approach to my work. I possess strong skills in
              agile methodology and prioritize the needs of the end-users. My
              expertise lies in TypeScript, as well as other languages,
              libraries, and frameworks that can be used to solve real-world
              problems through coding.
            </h4>
          </div>

          <div className="text-white w-full text-center">
            <h3 className="text-white text-5xl mb-10 text-center">
              Work Experience
            </h3>

            <div className="grid px-5 grid-cols-2 gap-7">
              <div className="mb-5 p-5 rounded-xl flex items-center justify-center flex-col bg-primary">
                <img src={images.cnomads} className="rounded-full w-24 h-24" />
                <h4 className="text-white text-3xl max-w-readable">
                  Creative Nomads
                </h4>
                <p className="text-xl">
                  Frontend Developer
                  <br />{' '}
                  <span className="text-sm"> (April 2022 - December 2022)</span>
                </p>
              </div>

              <div className="mb-5 p-5 rounded-xl flex items-center justify-center flex-col  bg-primary">
                <img src={images.xv} className="rounded-full w-24 h-24" />
                <h4 className="text-white text-3xl max-w-readable">
                  10X Ventures
                </h4>
                <p className="text-xl">
                  Full-Stack Developer
                  <br /> <span className="text-sm">(Dec 2022 - Jun 2022)</span>
                </p>
              </div>

              <div className="mb-5 p-5 rounded-xl flex items-center justify-center flex-col  bg-primary">
                <img src={images.gmb} className="rounded-full w-24 h-24" />
                <h4 className="text-white text-3xl max-w-readable">
                  GameMyBiz
                </h4>
                <p className="text-xl">
                  Full-Stack Developer <br />{' '}
                  <span className="text-sm">(Jan 2021 - Jun 2022) </span>
                </p>
              </div>

              <div className="mb-5 p-5 rounded-xl flex items-center justify-center flex-col  bg-primary">
                <img src={images.hooli} className="rounded-full w-24 h-24" />
                <h4 className="text-white text-3xl max-w-readable">
                  HooliSoftware
                </h4>
                <p className="text-xl">
                  Software Engineer <br />{' '}
                  <span className="text-sm">(Jul 2021 - March 2022)</span>
                </p>
              </div>

              <div className="mb-5 p-5 rounded-xl flex items-center justify-center flex-col  bg-primary col-span-full">
                <img src={images.rmc} className="rounded-full w-24 h-24" />
                <h4 className="text-white text-3xl max-w-readable">RMC</h4>
                <p className="text-xl">
                  Web Developer <br />{' '}
                  <span className="text-sm">(December 2020 - Jun 2021)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** last div */}
      <h3 className="text-6xl pt-[50px] md:pt-[70px] text-white">
        WHY HIRE ME?
      </h3>

      <div className="w-full flex items-center justify-center flex-col md:flex-row gap-12">
        <div className="flex flex-col md:flex-row item-center justify-center w-full gap-12 md:gap-52 p-12">
          <div className="bg-primary p-16 rounded-2xl shadow-2xl">
            <div className="self-center mb-3">
              <AiOutlineTeam size="5rem" />
              <h4 className="text-2xl font-semibold">Team player</h4>
            </div>
            <p className="text-2xl max-w-smallWidthChar">
              My collaborative nature and open communication style enable me to
              effectively work with my teammates, ensuring that we overcome
              challenges and reach our objectives.
            </p>
          </div>
          <div className="bg-primary p-16 rounded-2xl shadow-2xl">
            <div className="self-center mb-3">
              <FaTools size="5rem" />
              <h4 className="text-2xl font-semibold">Problem Solver</h4>
            </div>
            <p className="text-2xl max-w-smallWidthChar">
              As a thoughtful individual, I center my attention on the presented
              problem and endeavor to amalgamate information and knowledge to
              arrive at a resolution.
            </p>
          </div>
          <div className="bg-primary p-16 rounded-2xl shadow-2xl">
            <div className="self-center mb-3">
              <AiOutlineTeam size="5rem" />
              <h4 className="text-2xl font-semibold">Team player</h4>
            </div>
            <p className="text-2xl max-w-smallWidthChar">
              As a thoughtful individual, I center my attention on the presented
              problem and endeavor to amalgamate information and knowledge to
              arrive at a resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
