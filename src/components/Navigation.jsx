import { useEffect, useState } from 'react'

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={`sticky top-0 left-0 w-full z-50 px-6 py-4 flex justify-center gap-8 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-lg backdrop-blur" : "bg-white shadow"
                }`}
        >
            <a href="#about" className="text-[var(--color-primary)] font-semibold hover:underline">O nas</a>
            <a href="#services" className="text-[var(--color-primary)] font-semibold hover:underline">Specjalizacje</a>
            <a href="#team" className="text-[var(--color-primary)] font-semibold hover:underline">Zespół</a>
            <a href="#contact" className="text-[var(--color-primary)] font-semibold hover:underline">Kontakt</a>
        </nav>
    )
}

export default Navigation