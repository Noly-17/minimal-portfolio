import React from 'react';
import './styles.scss';

import { CiFacebook } from 'react-icons/ci';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineSlack } from 'react-icons/ai';

const RightNav = () => {
  return (
    <div className="fixed right-12 top-96">
      <div className="p-5">
        <CiFacebook size="3rem" className="bg-blue-500 rounded-full" />
      </div>
      <div className="p-5">
        <BsGithub size="3rem" className="bg-white rounded-full" />
      </div>
      <div className="p-5">
        <AiOutlineSlack size="3rem" className="bg-white rounded-full" />
      </div>
    </div>
  );
};

export default RightNav;
