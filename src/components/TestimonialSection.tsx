import { SectionHeader } from "./SectionHeader";
import { CardContent } from "./ui/card";

import { Card } from "./ui/card";
import { RiDoubleQuotesL } from "react-icons/ri";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Giovanna is an extremely competent professional, driven by both processes and people. She has strong command of HR tools and is well-prepared to handle high-volume, large-scale recruitment. Working with her was an incredible experience — she's highly intelligent and truly dedicated.",
    author: "Artacrene Cutrim",
    role: "HR Analyst",
    company: "J&T Express Brasil",
  },
  {
    quote:
      "Giovanna is an excellent student. She has an impressive vocabulary and is very inquisitive which makes her a student who is always trying to excel and improve her English communication skills. She learns concepts quite quickly and is already able to reproduce them effectively. It's a pleasure to have her as my student. I know she will excel in anything she puts her mind to.",
    author: "Thalista S.",
    role: "Founder of Verbalize Now",
  },
];

export function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader
            title="What People Say"
            description="Don't just take my word for it — I've been lucky to work with some incredible people, and here's what they've shared ❤️"
          />
        </div>

        <div className="flex gap-5 md:flex-row flex-col">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-1">
              <Card className="h-full w-full border-none shadow-lg bg-white/50 backdrop-blur-sm">
                <CardContent className="flex relative flex-col p-6 h-full">
                  <RiDoubleQuotesL
                    size={24}
                    className="absolute text-secondary/20 mb-4 top-0"
                  />
                  <p className="text-lg text-primary mb-3 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-accent flex flex-col gap-1 pt-3">
                    <p className="font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-secondary">
                      {testimonial.role}
                      {testimonial.company && (
                        <span className="text-secondary">
                          {" "}
                          • {testimonial.company}
                        </span>
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
