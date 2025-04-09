import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <Section id='hero' heroSection={true}>
            <div className='h-full w-full bg-hero bg-cover bg-center brightness-75'></div>
            <div className='absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 pl-8 border-l-4 border-accent py-4'>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent text-shadow">Twoje <br />Bezpieczeństwo <br />Prawne</h1>
                <p className="text-lg md:text-xl mb-10 text-white text-shadow">Profesjonalna pomoc prawna w każdej sytuacji</p>
                <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl hover:brightness-90 transition">Skontaktuj się</button>
            </div>
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 cursor-pointer transition-all hover:pb-2'>
                <a href="#about">
                    <FontAwesomeIcon href="#about" className='w-8 h-8 text-accent' icon={faArrowDown} />
                </a>
            </div>
        </Section>
    )
}

export default Hero