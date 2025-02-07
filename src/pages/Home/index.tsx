import Contact from "@/components/contacts";
import Details from "@/components/edu-exp";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Info from "@/components/info";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global{
  interface Window {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}

const HomePage = () => {
  const location=useLocation();
 
  useEffect(() => {
    if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
      window.HSStaticMethods.autoInit();
    } else {
      console.warn("HSStaticMethods is not defined or autoInit is not a function.");
    }
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 flex">
      <div className="xl: w-[1200px] h-full sm:mx-auto border-x border-zinc-100 dark:bg-zinc-950 bg-white dark:border-zinc-800">
        <Header />
        <Info />
        <Projects />
        <Details />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
