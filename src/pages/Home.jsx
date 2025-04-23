import { RevealOnScroll } from "../components/RevealOnScroll.jsx";
import ImageSrc from "../assets/techtitan.png";
import { About } from "./About";
import { Contact } from "./Contact";
import { Members } from "./Members";
import { Projects } from "./Projects.jsx";


export const Home = () => {
    return (
        <div className="relative">
            {/* Home section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative px-6 md:px-12 z-10"
            >
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                        {/* Left: Text */}
                        <div className="text-left z-10 max-w-3xl md:w-1/2">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                <span className="text-white">Tech</span>
                                <span className="text-teal-500">.Titans</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8 max-w-lg">
                                We are a team of passionate software developers dedicated to building innovative, efficient, and user-friendly solutions. With a strong foundation in HTML, CSS, PHP, we collaborate closely to turn ideas into functional applications that solve real-world problems and create value for users.
                            </p>
                            <div className="flex space-x-4">
                                {/* Box 1 */}
                                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-teal-500">
                                    <h3 className="text-xl font-bold">Our Mission</h3>
                                    <p className="text-sm mt-2">
                                        To deliver cutting-edge software solutions that empower businesses and individuals.
                                    </p>
                                </div>
                                {/* Box 2 */}
                                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-teal-500">
                                    <h3 className="text-xl font-bold">Our Vision</h3>
                                    <p className="text-sm mt-2">
                                        To be a global leader in software development and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="mt-10 md:mt-0 md:w-1/2 flex flex-col items-center">
                            <img
                                src={ImageSrc}
                                alt="Crocodile Bomber"
                                className="rounded-full w-92 h-92 object-cover border-4 border-white shadow-lg"
                            />
                           
                            </div>
                        </div>
                    
                </RevealOnScroll>
            </section>
            
            {/* Include About section directly */}
            <About />
             {/* Include Member section directly */}
             <Members/>
             {/* Include Projects section directly */}
             <Projects />
            {/* Include Contact section directly */}
            <Contact />
        </div>
    );
};