import { cn } from "@/lib/utils";
import Container from "./Container";
import { Button } from "./ui/button";

export default function Navbar({
  activeSection,
  sections,
}: {
  activeSection: string;
  sections: { id: string; label: string }[];
}) {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed flex items-center w-full h-16 top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <Container className="flex w-full justify-between items-center">
        <h2 className="text-lg font-semibold text-stone-800">
          Giovanna Prasser
        </h2>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm cursor-pointer transition-all duration-200 linear ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-stone-600 hover:text-stone-800"
              }`}>
              <span className="relative space-y-1">
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-1 left-0 w-0 h-[2px] bg-primary blur-sm rounded-full transition-all delay-300 duration-500 linear",
                    activeSection === item.id && "w-full"
                  )}></span>
              </span>
            </button>
          ))}
        </div>
        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-primary hover:bg-primary/80 text-white px-6 py-2 text-sm rounded-full">
          Say hello
        </Button>
      </Container>
    </nav>
  );
}
