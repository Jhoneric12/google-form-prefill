import React from 'react'
import { buildApplyLink } from '../../../constants/jobData';

const ApplyButton = ({ position, accent = "gold" }) => {
 const palettes = {
     gold: "bg-[#1B2438] text-[#F3F4F1] hover:bg-[#C9A227] hover:text-[#1B2438]",
     teal: "bg-[#1B2438] text-[#F3F4F1] hover:bg-[#2F8F82] hover:text-[#F3F4F1]",
   };
 
   return (
     <a
       href={buildApplyLink(position)}
       target="_blank"
       rel="noopener noreferrer"
       className={`inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3
         font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.18em]
         transition-colors duration-200 ease-out
         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2438]
         ${palettes[accent]}`}
     >
       Apply now
       <span aria-hidden="true">→</span>
     </a>
   );
}

export default ApplyButton