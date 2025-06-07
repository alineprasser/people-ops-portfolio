import Container from "./Container";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed flex items-center w-full h-16 top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <Container className="flex w-full justify-between items-center">
        <h2 className="text-lg font-semibold text-stone-800">
          Giovanna Prasser
        </h2>
        <div className="hidden md:flex items-center space-x-8">
          {[
            { id: "about", label: "Hello" },
            { id: "story", label: "My Story" },
            { id: "experience", label: "Journey" },
            { id: "approach", label: "How I Help" },
            { id: "work", label: "Recent Work" },
            { id: "contact", label: "Let's Chat" },
          ].map((item) => (
            <button
              key={item.id}
              //   onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors `}>
              {item.label}
            </button>
          ))}
        </div>
        <Button
          //   onClick={() => scrollToSection("contact")}
          className="bg-primary hover:bg-primary/80 text-white px-6 py-2 text-sm rounded-full">
          Say hello
        </Button>
      </Container>
    </nav>
  );
}
