import React from 'react'

const ExperienceStamp = ({minExperience}) => {
  return (
    <div
      className="pointer-events-none absolute -right-3 -top-3 flex h-20 w-20 rotate-[-8deg]
        select-none items-center justify-center rounded-full border-[1.5px] border-dashed
        border-[#C9A227] bg-[#F3F4F1] text-center leading-tight"
    >
      <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#1B2438]">
        min.
        <br />
        <span className="text-base font-semibold text-[#C9A227]">{minExperience}</span>
        <br />
        exp.
      </span>
    </div>
  );
}

export default ExperienceStamp