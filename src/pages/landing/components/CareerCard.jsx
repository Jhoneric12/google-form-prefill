import React from 'react'
import ExperienceStamp from './ExperienceStamp';
import ApplyButton from './ApplyButton';

const CareerCard = ({ job }) => {
   return (
    <article
      className="relative flex h-full flex-col rounded-md border border-[#DAD9D2] bg-white/60
        p-7 pt-9 shadow-[0_1px_0_0_#DAD9D2]"
    >
      <ExperienceStamp minExperience={job.minExperience} />

      <p className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#55607A]">
        {job.employmentType} · {job.location}
      </p>

      <h3 className="mt-2 font-['Fraunces'] text-2xl font-medium text-[#1B2438] sm:text-[26px]">
        {job.title}
      </h3>

      <p className="mt-3 font-['IBM_Plex_Sans'] text-[15px] leading-relaxed text-[#3F4A5F]">
        {job.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#DAD9D2] px-3 py-1 font-['IBM_Plex_Mono']
              text-[11px] tracking-wide text-[#1B2438]"
          >
            {tech}
          </span>
        ))}
      </div>

      <hr className="my-6 border-t border-[#DAD9D2]" />

      <ul className="flex-1 space-y-2.5">
        {job.requirements.map((req) => (
          <li
            key={req}
            className="flex gap-2.5 font-['IBM_Plex_Sans'] text-[14.5px] leading-snug text-[#3F4A5F]"
          >
            <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A227]" />
            <span>{req}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <ApplyButton position={job.formPosition} accent="gold" />
      </div>
    </article>
  );
}

export default CareerCard