import { ArrowRight, ExternalLink, Github } from "lucide-react";
import DicodingFrontend from "../assets/certificates/dicoding-frontend.jpg";
import DicodingBackend from "../assets/certificates/dicoding-backend.png";
import FCCBackend from "../assets/certificates/fcc-backend.png";
import FCCJs from "../assets/certificates/fcc-js.png";

const certificates = [
  {
    id: 1,
    image: DicodingFrontend,
    url: "https://www.dicoding.com/certificates/NVP748OGRPR0",
  },
  {
    id: 2,
    image: DicodingBackend,
    url: "https://www.dicoding.com/certificates/GRX5Q2N82Z0M",
  },
  {
    id: 3,
    image: FCCBackend,
    url: "https://www.freecodecamp.org/certification/fcc514d2970-0f11-4f55-ba56-8dfd00779c2f/back-end-development-and-apis",
  },
  {
    id: 4,
    image: FCCJs,
    url: "https://www.freecodecamp.org/certification/fcc514d2970-0f11-4f55-ba56-8dfd00779c2f/javascript-algorithms-and-data-structures",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of certifications that represent my continuous learning
          and professional growth.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((certificate, key) => (
            <div
              key={key}
              className="bg-card max-w-[300px] rounded-lg overflow-hidden shadow-xs card-hover p-2 gradient-border"
            >
              <a
                href={certificate.url}
                target="_blank"
                className="aspect-[3/2] overflow-hidden"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
