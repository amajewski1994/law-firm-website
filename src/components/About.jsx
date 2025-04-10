import React, { useState, useEffect } from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import about0 from '../assets/about_0.jpg?format=webp';
import about1 from '../assets/about_1.jpg?format=webp';

const About = () => {

    const [imageOffset, setImageOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setImageOffset(window.scrollY * 0.05);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Section id="about" background={'bg-slate-50'}>
            <div className="max-w-5xl mx-auto flex">
                <div className='mr-10 h-96 w-1/2 relative'>
                    <Picture data={about0} alt="O kancelarii" style={{ transform: `translateY(-${imageOffset}px)` }} className={`object-cover rounded-2xl mb-8 absolute left-0 w-3/4 shadow-lg shadow-black`} />
                    <Picture data={about1} alt="O kancelarii" style={{ transform: `translateY(${imageOffset}px)` }} className="object-cover rounded-2xl mb-8 absolute bottom-0 right-0 w-3/4 shadow-lg shadow-black" />
                </div>
                <div className='ml-10 w-1/2'>
                    <h2 className="text-3xl font-semibold mb-4">O Kancelarii</h2>
                    <p className="text-lg">Jesteśmy zespołem doświadczonych prawników oferujących kompleksowe usługi prawne. Naszą misją jest zapewnienie klientom poczucia bezpieczeństwa i profesjonalnej obsługi.</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-24 fill-white"
                >
                    <path d="M0,0V46.29c47.61,22,98.52,29,146.77,14.44C230.92,36,284,0,339.59,0s108.18,36,166.24,50.73C627.4,77,684.15,54,739.6,29.87,796.64,5,851.14-8.87,900,6.25c42.61,13.45,79.25,38.62,120,50.73V0Z" />
                </svg>
            </div>
        </Section>
    )
}

export default About