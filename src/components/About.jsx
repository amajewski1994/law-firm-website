import React, { useState, useEffect } from 'react';
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import Button from '../shared/Button';
import about0 from '../assets/about_0.jpg?format=webp';
import about1 from '../assets/about_1.jpg?format=webp';

const About = () => {
    const [imageOffset, setImageOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const offset = Math.min(window.scrollY * 0.05, 40);
            setImageOffset(offset);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Section id="about" className="bg-slate-50 relative overflow-hidden">
            <div className="max-w-5xl mx-auto flex gap-10">
                {/* Zdjęcia */}
                <div className="h-96 w-1/2 relative">
                    <Picture
                        data={about0}
                        alt="Zespół kancelarii pracujący nad dokumentami"
                        style={{
                            transform: `translateY(-${imageOffset}px)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                        className="object-cover rounded-2xl mb-8 absolute left-0 w-3/4 shadow-lg shadow-black"
                    />
                    <Picture
                        data={about1}
                        alt="Spotkanie z klientem w kancelarii"
                        style={{
                            transform: `translateY(${imageOffset}px)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                        className="object-cover rounded-2xl mb-8 absolute bottom-0 right-0 w-3/4 shadow-lg shadow-black"
                    />
                </div>

                {/* Tekst */}
                <div className="w-1/2 flex flex-col justify-center opacity-0 animate-fadeInUp [animation-delay:200ms]">
                    <h2 className="text-3xl font-semibold mb-4">O Kancelarii</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Kancelaria Prawna Anna Wojtas to zespół doświadczonych prawników, którzy oferują kompleksowe wsparcie prawne dla klientów indywidualnych i firm. Wyróżnia nas indywidualne podejście, jasna komunikacja oraz zaangażowanie w każdą sprawę.
                    </p>
                    <p className="text-lg leading-relaxed">
                        W naszej pracy stawiamy na skuteczność i przejrzystość. Dbamy o relację z klientem, zapewniając mu pełne zrozumienie sytuacji prawnej i najlepsze możliwe rozwiązania. Jesteśmy tu, aby bronić Twoich interesów i wspierać Cię na każdym etapie.
                    </p>

                    <Button className="mt-6 animate-fadeInUp [animation-delay:400ms]">
                        <a href="#team">Poznaj nasz zespół</a>
                    </Button>
                </div>
            </div>

            {/* Fala na dole */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-24 fill-white"
                >
                    <path d="M0,0V46.29c47.61,22,98.52,29,146.77,14.44C230.92,36,284,0,339.59,0s108.18,36,166.24,50.73C627.4,77,684.15,54,739.6,29.87,796.64,5,851.14-8.87,900,6.25c42.61,13.45,79.25,38.62,120,50.73V0Z" />
                </svg>
            </div>
        </Section>
    );
};

export default About;
