import { ExperienceTimelineItem } from "./ExperienceTimelineItem";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    title: "People Operations Lead",
    period: "2024 — Present",
    company: "Forward",
    location: "Remote, Full-time",
    description:
      "Led multiple concurrent talent searches, managing end-to-end processes from sourcing and evaluating candidates to coordinating interviews and aligning with client expectations. Developed and maintained structured documentation to ensure efficiency, conducted regular team syncs, and kept stakeholders consistently informed. Ensured timely delivery of top talent using tools like Notion, Close.io, Slack, and LinkedIn Recruiter to streamline workflows and support operational excellence.",
    isActive: true,
  },
  {
    title: "HR Analyst",
    period: "2023 — 2024",
    company: "J&T Express Brasil",
    location: "On-site, Full-time",
    description:
      "Managed end-to-end recruitment for leadership, administrative, and operational roles across RJ and ES, supporting the launch of 10+ warehouses during J&T's regional expansion. Designed strategic hiring initiatives for rural and low-density areas, provided actionable insights to hiring managers, and oversaw the entire recruitment process using Gupy ATS. Also responsible for onboarding and offboarding, mentoring trainees, delivering DISC assessment reports, and executing endomarketing strategies to strengthen employee engagement.",
  },
  {
    title: "HR Assistant",
    period: "2021 — 2022",
    company: "Nacional RH Consultoria e Gestão de Pessoas",
    location: "On-site, Full-time",
    description:
      "Handled sourcing for administrative and operational roles while maintaining organized and up-to-date candidate databases. Wrote tailored job descriptions and posted openings on platforms like PandaPé and Catho. Ensured a smooth, well-structured hiring process by coordinating interviews, managing employee benefits via G.infor, and supporting candidates, clients, and employees throughout. Also responsible for delivering clear, timely feedback to candidates at every stage.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-background-secondary/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeader
              title="My journey so far"
              description="From startup chaos to enterprise scale—I've been there, done that, and learned a lot along the way."
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            {experiences.map((experience, index) => (
              <ExperienceTimelineItem
                key={index}
                {...experience}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
