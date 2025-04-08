import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import hero from '../assets/hero.jpg?w=400&h=300&format=webp'

const Hero = () => {
    return (
        <Section id='hero' customClasses="h-screen flex flex-col items-center justify-center text-center px-6">
            <Picture data={hero} alt="Hero" className="w-full h-64 object-cover rounded-2xl mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Twoje bezpieczeństwo prawne</h1>
            <p className="text-lg md:text-xl mb-6">Profesjonalna pomoc prawna w każdej sytuacji</p>
            <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl shadow hover:brightness-90 transition">Skontaktuj się</button>
        </Section>
    )
}

export default Hero