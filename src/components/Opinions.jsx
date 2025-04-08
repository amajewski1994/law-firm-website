import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import opinions from '../assets/opinions.jpg?w=800&format=webp';

const Opinions = () => {
    return (
        <Section>
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12">Opinie klientów</h2>
                <Picture data={opinions} alt="Opinie klientów" className="w-full h-64 object-cover rounded-2xl mb-8" />
                <div className="space-y-8">
                    <blockquote className="text-lg">"Profesjonalizm i skuteczność. Polecam z całego serca!"</blockquote>
                    <blockquote className="text-lg">"Dzięki nim wygrałem trudną sprawę. Świetny kontakt i podejście do klienta."</blockquote>
                </div>
            </div>
        </Section>
    )
}

export default Opinions