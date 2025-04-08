import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import about from '../assets/about.jpg?w=800&format=webp';

const About = () => {
    return (
        <Section id="about">
            <div className="max-w-4xl mx-auto text-center">
                <Picture data={about} alt="O kancelarii" className="w-full h-64 object-cover rounded-2xl mb-8" />
                <h2 className="text-3xl font-semibold mb-4">O Kancelarii</h2>
                <p className="text-lg">Jesteśmy zespołem doświadczonych prawników oferujących kompleksowe usługi prawne. Naszą misją jest zapewnienie klientom poczucia bezpieczeństwa i profesjonalnej obsługi.</p>
            </div>
        </Section>
    )
}

export default About