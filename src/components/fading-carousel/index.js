import React from 'react';
import './styles.scss';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsBootstrap } from 'react-icons/bs';
import { DiCss3Full } from 'react-icons/di';

import {
  SiJavascript,
  SiRedux,
  SiReduxsaga,
  SiJest,
  SiStorybook,
  SiMaterialui,
  SiTailwindcss,
  SiVisualstudiocode,
  SiJava,
  SiSpringboot,
  SiFirebase,
  SiPostgresql,
} from 'react-icons/si';

const logoItems = [
  {
    name: 'Visual Basic',
    logo: <SiVisualstudiocode size="14rem" className="p-10" />,
  },
  {
    name: 'Spring Boot',
    logo: <SiSpringboot size="14rem" className="p-10" />,
  },
  {
    name: 'Java',
    logo: <SiJava size="14rem" className="p-10" />,
  },
  {
    name: 'SCSS',
    logo: <DiCss3Full border-4 size="14rem" className="p-10" />,
  },
  {
    name: 'Bootstrap',
    logo: <BsBootstrap size="14rem" className="p-10" />,
  },
  {
    name: 'Tailwindcss',
    logo: <SiTailwindcss size="14rem" className="p-10" />,
  },
  {
    name: 'Material UI',
    logo: <SiMaterialui size="14rem" className="p-10" />,
  },
  {
    name: 'Storybook',
    logo: <SiStorybook size="14rem" className="p-10" />,
  },
  {
    name: 'Jest',
    logo: <SiJest size="14rem" className="p-10" />,
  },
  {
    name: 'Postgres',
    logo: <SiPostgresql size="14rem" className="p-10" />,
  },
  {
    name: 'Firebase',
    logo: <SiFirebase size="14rem" className="p-10" />,
  },
  {
    name: 'React Native',
    logo: <TbBrandReactNative size="14rem" className="p-10" />,
  },
  {
    name: 'Redux Saga',
    logo: <SiReduxsaga size="14rem" className="p-10" />,
  },
  {
    name: 'Redux',
    logo: <SiRedux size="14rem" className="p-10" />,
  },
  {
    name: 'Redux Saga',
    logo: <TbBrandNextjs size="14rem" className="p-10" />,
  },
  {
    name: 'Javascript',
    logo: <SiJavascript size="14rem" className="p-10" />,
  },
];

const FadingCarousel = () => {
  return (
    <div className="fCarousel">
      <div className="bg-primary md:w-96 md:h-96 flex items-center justify-center rounded-full border-4">
        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiVisualstudiocode size="14rem" className="p-10 text-[#5B21B6]" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiJava size="14rem" className="p-10 text-[#DC2626]" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <DiCss3Full border-4 size="14rem" className="p-10 text-[#E879F9]" />
        </li>

        <li className="bg-[7C3AED] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <BsBootstrap size="14rem" className="p-10 text-white" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiTailwindcss size="14rem" className="p-10 text-[#22D3EE]" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiMaterialui size="14rem" className="p-10 text-[#3B82F6]" />
        </li>

        <li className="bg-[EC4899] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <SiStorybook size="14rem" className="p-10 text-white" />
        </li>

        <li className="bg-[F97316] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <SiJest size="14rem" className="p-10 text-white" />
        </li>

        <li className="bg-[#47a6ce] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <SiPostgresql size="14rem" className="p-10 text-white" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiFirebase size="14rem" className="p-10 text-[#F59E0B]" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <TbBrandReactNative size="14rem" className="p-10 text-[#38BDF8]" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiReduxsaga size="14rem" className="p-10 text-[#A3E635]" />
        </li>

        <li className="bg-[F8FAFC] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-black">
          <SiRedux size="14rem" className="p-10 text-[#7046b2]" />
        </li>

        <li className="bg-[171717] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <TbBrandNextjs size="14rem" className="p-10 text-white" />
        </li>

        <li className="bg-[EAB308] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <AiOutlineHtml5 size="14rem" className="p-10 text-white" />
        </li>

        <li className="bg-[f2e21b] md:w-96 md:h-96 flex items-center justify-center rounded-full border-4 border-white">
          <SiJavascript size="14rem" className="p-10  text-[#323330]" />
        </li>
      </div>
    </div>
  );
};

export default FadingCarousel;
