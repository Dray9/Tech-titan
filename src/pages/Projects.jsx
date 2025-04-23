export const Projects = () => {
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
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
                        {/* Project Card 1 */}
                        <div className="bg-gray-900 rounded-lg p-6 transition-transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-white mb-2">Mobile App</h3>
                            <p className="text-gray-400 mb-4">
                                A responsive mobile application built with React Native.
                            </p>
                            <img
                                className="w-full h-48 object-cover rounded-lg"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                alt="Mobile App Preview"
                            />
                        </div>

                        {/* Project Card 2 */}
                        <div className="bg-gray-900 rounded-lg p-6 transition-transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-white mb-2">Web Dashboard</h3>
                            <p className="text-gray-400 mb-4">
                                An interactive dashboard built with React and TailwindCSS.
                            </p>
                            <img
                                className="w-full h-48 object-cover rounded-lg"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                alt="Dashboard Preview"
                            />
                        </div>

                        {/* Project Card 3 */}
                        <div className="bg-gray-900 rounded-lg p-6 transition-transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-white mb-2">E-Commerce Site</h3>
                            <p className="text-gray-400 mb-4">
                                A full-featured online store with payment integration.
                            </p>
                            <img
                                className="w-full h-48 object-cover rounded-lg"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                alt="E-Commerce Preview"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
