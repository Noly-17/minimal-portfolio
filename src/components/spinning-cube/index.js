import React from 'react';
import { images } from '../../assets';
import './styles.scss';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const SpinnigCube = ({ position, top, left, bottom, right }) => {
  return (
    <div
      className={`cube text-2xl bg-black relative ${position} ${top} ${left} ${bottom} ${right}`}
    >
      <div className="side front flex items-center justify-center bg-[#212121]">
        <FaReact size="10rem" className="text-[#5ed3f3]" />
      </div>
      <div className="side back flex items-center justify-center">
        <SiMongodb size="10rem" />
      </div>
      <div className="side right flex items-center justify-center bg-[#f2f2f2]">
        <SiFirebase size="10rem" className="text-[#f2c12a]" />
      </div>
      <div className="side left flex items-center justify-center bg-[#f2f2f2]">
        <SiExpress size="10rem" className="text-[#000000]" />
      </div>
      <div className="side top flex items-center justify-center bg-[#69a14a]">
        <FaNodeJs size="10rem" className="text-[#303030]" />
      </div>
      <div className="side bottom flex items-center justify-center bg-[#001e2b]">
        <SiMongodb size="10rem" className="text-[#00ed64]" />
      </div>
    </div>
  );
};

export default SpinnigCube;
