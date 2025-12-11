import { Briefcase, Code, User } from "lucide-react";
import AboutPicture from "../assets/img/zaidan.png";
import CV from "../assets/CV_Muammar Zaidan Ariq.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex lg:flex-row flex-col-reverse gap-12 items-center">
          <div className="space-y-6 lg:w-1/2 w-full">
            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold">
              Passionate Web Developer & Tech <br /> Creator
            </h3>

            <div className="space-y-6 md:text-base sm:text-sm text-xs">
              <p className="text-muted-foreground">
                Bachelor's degree in Information Technology and Computer
                Education from State University of Jakarta with a GPA of
                3.79/4.00, has experience in web development and a strong
                interest in the world of technology. Skilled at working
                independently and collaboratively in a team to achieve set
                goals. teamwork.
              </p>
              <p className="text-muted-foreground">
                Possesses good time management skills, able to complete tasks
                under pressure, and adapts quickly to new environments. Eager to
                continue learning and developing skills, ready to contribute
                professionally with problem-solving abilities, effective
                communication, and solid
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={CV}
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-full lg:mb-0 mb-6">
            <div className="gradient-border picture-shadow mx-auto w-[90%] max-h-[400px] overflow-hidden">
              <img
                src={AboutPicture}
                className="object-center mx-auto"
                alt="picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
