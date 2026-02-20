import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: isHome ? '#home' : '/' },
        { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
        { name: 'Certificates', href: isHome ? '#certificates' : '/#certificates' },
        { name: 'Tech Stack', href: isHome ? '#tech-stack' : '/#tech-stack' },
        { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
    ];

    const handleLinkClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tighter text-[#111111]"
                    onClick={(e) => isHome && handleLinkClick(e, '#home')}
                >
                    KS<span className="text-[#2563EB]">.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="relative text-sm font-medium text-[#111111] hover:text-[#2563EB] transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile menu could be added here if needed, but keeping it minimal for now */}
                <div className="md:hidden">
                    {/* Mobile toggle icon would go here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
