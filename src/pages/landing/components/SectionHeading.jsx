import React from 'react'

const SectionHeading = ({ eyebrow, title, blurb, accentClass }) => {
   return (
    <div className="mb-10 max-w-2xl">
      <p
        className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.25em] ${accentClass}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-2 font-['Fraunces'] text-3xl font-medium text-[#1B2438] sm:text-4xl">
        {title}
      </h2>
      {blurb && (
        <p className="mt-3 font-['IBM_Plex_Sans'] text-[15px] leading-relaxed text-[#55607A]">
          {blurb}
        </p>
      )}
    </div>
  );
}

export default SectionHeading