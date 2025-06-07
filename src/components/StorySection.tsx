import { SectionHeader } from "./SectionHeader";

const storyParagraphs = [
  "I didn't set out to become a \"People Ops person\"—it kind of found me. After watching too many talented friends leave jobs because of poor management or toxic cultures, I realized that the way we treat people at work isn't just an HR issue—it's a human issue.",
  "What started as helping a startup friend with their first employee handbook turned into a decade-long mission to prove that taking care of people isn't just the right thing to do—it's the smart thing to do. I've seen firsthand how the right culture, systems, and support can transform not just businesses, but lives.",
  "Today, I work with founders and leaders who believe that their people are their greatest asset, not just their biggest expense. Together, we build workplaces where everyone can do their best work and feel genuinely valued.",
];

export function StorySection() {
  return (
    <section
      id="story"
      className="py-20 bg-white">
      <div className="max-w-4xl flex flex-col gap-8 items-center mx-auto px-6">
        <SectionHeader title="A little about my journey" />

        <div className="flex flex-col text-stone-600 gap-3 prose prose-lg prose-stone mx-auto text-left">
          {storyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
