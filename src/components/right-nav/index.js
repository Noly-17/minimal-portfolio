import React from 'react';
import './styles.scss';

import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { BsGithub } from 'react-icons/bs';
import {
  AiOutlineSlack,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { images } from '../../assets';

const RightNav = () => {
  return (
    <div
      className="fixed z-50 right-12 top-96 hidden md:block"
      data-aos="zoom-in"
    >
      <div className="p-5">
        <CiFacebook
          size="3rem"
          className="text-white rounded-full bg-[#1771e6] cursor-pointer hover:bg-secondary"
        />
      </div>
      <div className="p-5">
        <AiFillTwitterCircle
          size="3rem"
          className="text-[#51a4e2] rounded-full bg-white cursor-pointer hover:bg-secondary"
        />
      </div>
      <div className="p-5">
        <AiFillGithub
          size="3rem"
          className="bg-white rounded-full text-black cursor-pointer hover:bg-secondary"
        />
      </div>
      <div className="p-5">
        <img
          src={images.slack}
          className="bg-white rounded-full w-12 h-12 p-1 cursor-pointer hover:bg-secondary"
        />
      </div>
    </div>
  );
};

export default RightNav;
