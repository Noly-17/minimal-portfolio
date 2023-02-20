import React from 'react';

const Tooltip = ({ children, content }) => {
  return (
    <div
      class="relative before:text-2xl before:min-w-[60px] before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-gray-700 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-700 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible"
      data-tip={content}
    >
      <button class="py-1 px-2 capitalize  text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2">
        {children}
      </button>
    </div>
  );
};

export default Tooltip;
