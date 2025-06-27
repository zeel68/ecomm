import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';
import { LuListFilter } from 'react-icons/lu';

const Categoryitem = ({ category }) => {
  const [open, setopen] = useState(false);

  return (
    <div className="block">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

      
        {/* responsive button */}
        <div className="flex justify-end items-center mt-4 lg:hidden">
          <button onClick={() => setopen(true)} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md">
            <LuListFilter className="text-lg" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>

        {/* main page */}
        <div className="flex flex-row gap-6 flex-wrap lg:flex-nowrap mt-6">

          
          <Filter isMobileOpen={open} onClose={() => setopen(false)} />
          <Item category={category} />
        </div>
      </div>
    </div>
  );
};

export default Categoryitem;
