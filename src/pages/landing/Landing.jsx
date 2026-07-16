import { careers, internships, buildApplyLink } from "../../constants/jobData";
import CareerCard from "./components/CareerCard";
import InternshipCard from "./components/InternshipCard";
import SectionHeading from "./components/SectionHeading";


export default function CareersPage() {
  return (
    <main className="bg-[#F3F4F1]">
      {/* Careers */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <SectionHeading
          eyebrow="Open roles — full-time"
          title="Careers"
          blurb="Join the team building our core products. These are full-time positions for people who already have professional experience under their belt."
          accentClass="text-[#C9A227]"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {careers.map((job) => (
            <CareerCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Internship (OJT) */}
      <section className="border-t border-[#DAD9D2] bg-[#2F8F82]/[0.04]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <SectionHeading
            eyebrow="On-the-job training"
            title="Internship (OJT) Roles"
            blurb="No professional experience required — these tracks are built for students completing their OJT hours who want real, mentored, hands-on practice."
            accentClass="text-[#2F8F82]"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internships.map((role) => (
              <InternshipCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}