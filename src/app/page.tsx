import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { SectionProjects } from "./components/SectionProjects";
import { SectionAbout } from "./components/SectionAbout";

export default function Home() {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>

      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
        <Navbar />
      </header>

      <main>
        <Section />
        <SectionProjects />
        <SectionAbout />
      </main>
      
      <Footer />
    </>
  );
}
