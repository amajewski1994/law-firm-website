import React from 'react'
import Section from "../shared/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Button from '../shared/Button';

const Hero = () => {
    return (
        <Section id='hero' heroSection={true} background={'bg-gradient-to-b from-white to-slate-50'}>
            <div className='h-full w-full bg-hero bg-cover bg-center brightness-75'></div>
            <div className='absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 pl-8 border-l-4 border-accent py-4'>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent text-shadow">Twoje <br />Bezpieczeństwo <br />Prawne</h1>
                <p className="text-lg md:text-xl mb-10 text-white text-shadow">Profesjonalna pomoc prawna w każdej sytuacji</p>
                <a href="#contact">
                    <Button className='hover:brightness-90'>Skontaktuj się</Button>
                </a>
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