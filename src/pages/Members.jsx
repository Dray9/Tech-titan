import { useRef } from "react";

import andrei from "../assets/andrei.jpg";
import andreiPrj1 from "../assets/andreiProject1.png";
import andreiPrj2 from "../assets/techtitan.png";

import raven from "../assets/raven.jpg";
import ravenPrj1 from "../assets/ravenProject1.png";

import jed from "../assets/jed.jpg";
import jedPrj1 from "../assets/jedProject1.jpg";



export const Members = () => {
    const people = [
        {
            id: 'andrei-rama',
            name: 'Andrei Rama',
            role: 'Backend Developer / UI/UX Designer',
            imageUrl: andrei,
            description: 'Andrei is a visionary leader with a passion for innovation and excellence.',
            languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Tailwind CSS'],
            projects: [
                { 
                    image: andreiPrj1, 
                    link: 'https://imgur.com/a/andrei-angelo-q-rama-frontend-backend-cvsu-imus-online-exam-V1Oa0DH?fbclid=IwZXh0bgNhZW0CMTEAAR5o9yPzkqPJYtioUhJdQ2GLKSrm4W1smAVl-tmG0YYjQiZ6tFFWXS-lHc2leg_aem_L-atbHZI2N8BDIl6jTyHLw', 
                    description: 'Project 1: Frontend and Backend for Cvsu Imus Online Exam' 
                },
                { 
                    image: andreiPrj2, 
                    link: 'https://imgur.com/gallery/tech-titans-iHjpy55', 
                    description: 'Project 2: A portfolio website showcasing creative work using only frontend(HTML, CSS, JavaScript, Tailwind CSS).' 
                },
            ],
        },
        {
            id: 'raven-nico-zulueta',
            name: 'Raven Nico Zulueta',
            role: 'Frontend Developer / UI/UX Designer',
            imageUrl: raven,
            description: 'Raven is dedicated to driving success and fostering collaboration.',
            languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Tailwind CSS'],
            projects: [
                { 
                    image: ravenPrj1, 
                    link: 'https://imgur.com/a/raven-nico-zulueta-project-1-frontend-only-website-barangay-molino-iv-bacoor-cavite-af8yYdG', 
                    description: 'Project 1: A frontend-only website for Barangay Molino IV.' 
                },
                { 
                    image: andreiPrj2, 
                    link: 'https://imgur.com/gallery/tech-titans-iHjpy55', 
                    description: 'Project 2: A portfolio website showcasing creative work using only frontend(HTML, CSS, JavaScript, Tailwind CSS).' 
                },
            ],
        },
        {
            id: 'jed',
            name: 'Jedd Ordoñez',
            role: 'Frontend Developer / UI/UX Designer',
            imageUrl: jed,
            description: 'Jed brings creativity and strategic thinking to the team.',
            languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Tailwind CSS'],
            projects: [
                { 
                    image: jedPrj1, 
                    link: 'https://imgur.com/a/hx1gnWI', 
                    description: 'Project 1: ISCP Scholar Portal with both Frontend and Backend' 
                },
                { 
                    image: andreiPrj2, 
                    link: 'https://imgur.com/gallery/tech-titans-iHjpy55', 
                    description: 'Project 2: A portfolio website showcasing creative work using only frontend(HTML, CSS, JavaScript, Tailwind CSS).' 
                },
            ],
        },
    ];

    const memberRefs = useRef({});

    const scrollToMember = (id) => {
        const memberElement = memberRefs.current[id];
        if (memberElement) {
            memberElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <section
            id="members"
            className="min-h-screen flex flex-col items-center justify-center py-20"
        >
            <div className="isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 w-full max-w-7xl mx-auto rounded-3xl border border-gray-700">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-teal-500 sm:text-4xl">
                            Meet our Members
                        </h2>
                        <p className="mt-6 text-lg/8 text-teal-50">
                            We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                            best results for our clients.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.id}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt={person.name}
                                        src={person.imageUrl}
                                        className="h-24 w-24 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold tracking-tight text-teal-50">
                                            <button
                                                onClick={() => scrollToMember(person.id)}
                                                className="hover:underline focus:outline-none"
                                            >
                                                {person.name}
                                            </button>
                                        </h3>
                                        <p className="text-base font-semibold text-teal-500">
                                            {person.role}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            
            <div className="w-full max-w-7xl mx-auto mt-20 space-y-16">
                {people.map((person) => (
                    <div
                        key={person.id}
                        id={person.id}
                        ref={(el) => (memberRefs.current[person.id] = el)}
                        className="bg-gray-800 p-10 rounded-3xl border border-gray-700 mt-10 flex flex-col lg:flex-row gap-10"
                    >
                        {/* Left Section: Member Info */}
                        <div className="flex-1 flex flex-col items-center lg:items-start">
                            <img
                                alt={person.name}
                                src={person.imageUrl}
                                className="h-48 w-48 rounded-full mb-6 duration-300 hover:scale-105 hover:outline hover:outline-teal-500"
                            />
                            <h1 className="text-3xl font-bold text-teal-50">{person.name}</h1>
                            <p className="text-xl text-teal-500">{person.role}</p>
                            <p className="mt-4 text-teal-50 text-center lg:text-left">{person.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                                {person.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm font-medium text-teal-50 bg-teal-600 rounded-full border border-teal-400"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Section: Past Projects */}
                        <div className="flex-1 flex flex-wrap gap-4 justify-center lg:justify-start">
                            {person.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center h-auto w-48 rounded-lg border border-gray-700"
                                >
                                    {/* Default Image */}
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.image}
                                            alt={`Project ${index + 1}`}
                                            className="h-48 w-full object-cover rounded-t-lg"
                                        />
                                    </a>

                                    {/* Always Visible Description */}
                                    <div className="w-full bg-gray-800 text-white text-sm p-2 rounded-b-lg">
                                        {project.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
