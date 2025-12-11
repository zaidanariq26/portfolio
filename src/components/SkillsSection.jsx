import { useState } from "react";
import { cn } from "../lib/utils";
import { Icon } from "@iconify/react";

const skills = [
  { icon: "logos:html-5", category: "frontend" },
  { icon: "logos:css-3", category: "frontend" },
  { icon: "logos:javascript", category: "frontend" },
  { icon: "logos:react", category: "frontend" },
  { icon: "logos:vue", category: "frontend" },
  { icon: "logos:tailwindcss-icon", category: "frontend" },
  { icon: "logos:bootstrap", category: "frontend" },

  { icon: "logos:laravel", category: "backend" },
  { icon: "logos:nodejs-icon", category: "backend" },

  { icon: "logos:postman-icon", category: "tools" },
  { icon: "logos:figma", category: "tools" },
  { icon: "devicon:canva", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground "
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex justify-center items-center size-[64px] bg-card rounded-xl shadow-md card-hover"
            >
              <Icon icon={skill.icon} height="32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
