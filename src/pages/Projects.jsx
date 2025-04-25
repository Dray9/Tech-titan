import andrei from "../assets/andrei.jpg";
import andreiPrj1 from "../assets/andreiProject1.png";
import andreiPrj2 from "../assets/techtitan.png";
import raven from "../assets/raven.jpg";
import ravenPrj1 from "../assets/ravenProject1.png";
import jed from "../assets/jed.jpg";
import jedPrj1 from "../assets/jedProject1.jpg";

export const Projects = () => {
    const allProjects = [
        {
            title: "Cvsu Imus Online Exam",
            description: "Frontend and Backend for Cvsu Imus Online Exam",
            image: andreiPrj1,
            link: "https://imgur.com/a/andrei-angelo-q-rama-frontend-backend-cvsu-imus-online-exam-V1Oa0DH",
            author: "Andrei Rama",
            technologies: ["Frontend", "Backend", "MySQL", "JavaScript"]
        },
        {
            title: "Tech Titans Portfolio",
            description: "A portfolio website showcasing creative work using frontend technologies",
            image: andreiPrj2,
            link: "https://imgur.com/gallery/tech-titans-iHjpy55",
            author: "Andrei Rama, Raven Zulueta, Jedd Ordoñez ",
            technologies: ["React", "JavaScript", "Tailwind CSS"]
        },
        {
            title: "Barangay Molino IV Website",
            description: "A frontend-only website for Barangay Molino IV",
            image: ravenPrj1,
            link: "https://imgur.com/a/raven-nico-zulueta-project-1-frontend-only-website-barangay-molino-iv-bacoor-cavite-af8yYdG",
            author: "Raven Nico Zulueta",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "ISCP Scholar Portal",
            description: "Scholar Portal with both Frontend and Backend functionality",
            image: jedPrj1,
            link: "https://imgur.com/a/hx1gnWI",
            author: "Jedd Ordoñez ",
            technologies: ["Frontend", "Backend", "MySQL",]
        }
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 w-full max-w-7xl mx-auto rounded-3xl border border-gray-700">
                <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base font-semibold text-teal-400">Our Projects</h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-teal-500 sm:text-5xl">
                        What we've built
                    </p>
                    <div className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-2">
                        {allProjects.map((project, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex flex-col h-full">
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <p className="text-teal-500 mb-4">Built by: {project.author}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1 text-sm font-medium text-teal-50 bg-teal-600/30 rounded-full border border-teal-400/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-auto"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
