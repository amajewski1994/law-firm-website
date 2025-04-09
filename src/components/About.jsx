import React, { useState, useEffect } from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import about from '../assets/hero.jpg?format=webp';

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
        <Section id="about">
            <div className="max-w-5xl mx-auto flex">
                <div className='mr-10 h-96 w-1/2 relative'>
                    <Picture data={about} alt="O kancelarii" style={{ transform: `translateY(-${imageOffset}px)` }} className={`object-cover rounded-2xl mb-8 absolute left-0 w-3/4 shadow-lg shadow-black`} />
                    <Picture data={about} alt="O kancelarii" style={{ transform: `translateY(${imageOffset}px)` }} className="object-cover rounded-2xl mb-8 absolute bottom-0 right-0 w-3/4 shadow-lg shadow-black" />
                </div>
                <div className='ml-10 w-1/2'>
                    <h2 className="text-3xl font-semibold mb-4">O Kancelarii</h2>
                    <p className="text-lg">Jesteśmy zespołem doświadczonych prawników oferujących kompleksowe usługi prawne. Naszą misją jest zapewnienie klientom poczucia bezpieczeństwa i profesjonalnej obsługi.</p>
                </div>
            </div>
        </Section>
    )
}

export default About