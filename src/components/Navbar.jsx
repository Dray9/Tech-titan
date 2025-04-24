import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        // Disable scrolling when the menu is open
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Tech<span className="text-teal-500">.Titans</span>
                    </a>

                    {/* Hamburger Icon */}
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? "✖" : "☰"}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 px-3 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 px-3 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            About
                        </a>
                        <a href="#members" className="text-gray-300 px-3 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Members
                        </a>
                        <a href="#projects" className="text-gray-300 px-3 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-300 px-3 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-800/90 backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 z-50 md:hidden">
                    <div className="absolute top-4 right-4">
                        <button onClick={() => setMenuOpen(false)} className="text-2xl text-white hover:text-teal-500 transition-colors">
                            ✖
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-8">
                        <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Home
                        </a>
                        <a href="#about" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            About
                        </a>
                        <a href="#members" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Members
                        </a>
                        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Projects
                        </a>
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-all">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

