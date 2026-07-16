import React from 'react'
import ApplyButton from './ApplyButton';

const InternshipCard = ({ role }) => {
  return (
    <article className="relative flex h-full flex-col rounded-md border border-[#DAD9D2] bg-white/60 p-7">
      <span
        className="inline-flex w-fit items-center rounded-sm bg-[#2F8F82]/10 px-3 py-1
          font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#2F8F82]"
      >
        Intern (OJT)
      </span>

      <h3 className="mt-3 font-['Fraunces'] text-xl font-medium text-[#1B2438]">
        {role.title}
      </h3>

      <p className="mt-3 flex-1 font-['IBM_Plex_Sans'] text-[14.5px] leading-relaxed text-[#3F4A5F]">
        {role.description}
      </p>

      <div className="mt-6">
        <ApplyButton position={role.formPosition} accent="teal" />
      </div>
    </article>
  );
}

export default InternshipCard