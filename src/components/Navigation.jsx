import { useEffect, useState } from 'react';
import Picture from '../shared/Picture';
import logo from '../assets/logo.jpg?format=webp';

const navItems = [
    { label: 'O nas', id: 'about' },
    { label: 'Specjalizacje', id: 'services' },
    { label: 'Zespół', id: 'team' },
    { label: 'Kontakt', id: 'contact' },
];

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 50);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollY = window.scrollY;

            for (const section of sections) {
                if (
                    section &&
                    scrollY >= section.offsetTop - 120 &&
                    scrollY < section.offsetTop + section.offsetHeight - 120
                ) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            aria-label="Główna nawigacja"
            role="navigation"
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-center gap-12 transition-all duration-300 
        ${scrolled ? "bg-white/90 shadow-lg backdrop-blur" : "bg-white shadow"} 
        ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Logo */}
            <div
                className={`rounded-full w-12 h-12 border border-[var(--color-primary)] shadow-md overflow-hidden`}
            >
                <a href="#hero">
                    <Picture data={logo} alt="Logo" className="object-cover w-full h-full" />
                </a>
            </div>

            {/* Linki */}
            <div className="flex justify-center gap-8 items-center">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`font-semibold transition-all hover:underline hover:drop-shadow-sm
              ${activeSection === item.id
                                ? "text-[var(--color-accent)]"
                                : "text-[var(--color-primary)]"
                            }`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
