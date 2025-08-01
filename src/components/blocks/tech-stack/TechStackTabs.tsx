'use client';

import { useState } from 'react';
import type { TechStackT } from './tech-stack-types';

export const TechStackTabs = ({ techStack }: { techStack: TechStackT }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(techStack)[0]);

  return (
    <>
      <ul className='mb-8 flex gap-x-6 overflow-x-auto md:gap-x-10'>
        {Object.keys(techStack).map(title => (
          <li
            onClick={() => setActiveTab(title)}
            key={title}
            className={`cursor-pointer pb-[10px] text-base font-medium whitespace-nowrap md:text-2xl ${activeTab === title ? 'border-accent border-b-2' : ''}`}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className='flex flex-wrap gap-x-[10px] gap-y-[6px]'>
        {techStack[activeTab].map(tech => (
          <div
            key={tech}
            className='border-accent text-secondary flex items-center gap-4 rounded-[35px] border px-4 py-[10px] font-semibold'
          >
            {tech}
          </div>
        ))}
      </div>
    </>
  );
};
