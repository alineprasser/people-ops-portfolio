import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const sections = [
    { id: "about", label: "Hello" },
    { id: "story", label: "My Story" },
    { id: "experience", label: "Journey" },
    { id: "approach", label: "How I Help" },
    { id: "contact", label: "Let's Chat" },
  ];

  return (
    <main className="min-h-screen w-screen flex flex-col">
      <Navbar
        activeSection={activeSection}
        sections={sections}
      />
      <LandingPage
        onSectionChange={setActiveSection}
        sections={sections}
      />
      <Footer />
    </main>
  );
}

export default App;
