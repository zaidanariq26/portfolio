import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl text-center mx-auto z-10">
        <div className="space-y-6">
          <h1 className="sm:text-4xl md:text-6xl text-2xl  font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">
              Muammar{" "}
            </span>
            <span className="text-primary opacity-0 ml-2 animate-fade-in-delay-2">
              Zaidan
            </span>
            <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-3">
              Ariq
            </span>
          </h1>

          <p className="text-sm md:text-xl sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A Web Developer passionate about building clean, modern, and
            user-focused web experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
