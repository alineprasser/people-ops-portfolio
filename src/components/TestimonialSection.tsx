import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Giovanna is an extremely competent professional, driven by both processes and people. She has strong command of HR tools and is well-prepared to handle high-volume, large-scale recruitment. Working with her was an incredible experience — she’s highly intelligent and truly dedicated.",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeader
            title="What People Say"
            description="Don't just take my word for it — I've been lucky to work with some incredible people, and here's what they've shared 🤍"
          />
        </div>
      </div>
    </section>
  );
}
