import React from 'react';
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import service_0 from '../assets/services_0.jpg?format=webp';
import service_1 from '../assets/services_1.jpg?format=webp';
import service_2 from '../assets/services_2.jpg?format=webp';
import service_3 from '../assets/services_3.jpg?format=webp';
import service_4 from '../assets/services_4.jpg?format=webp';
import service_5 from '../assets/services_5.jpg?format=webp';

const DUMMY_SERVICES = [
    {
        id: 0,
        name: 'Prawo cywilne',
        description: 'Pomagamy w sprawach majątkowych, spadkowych oraz roszczeniach z umów. Reprezentujemy klientów w sądzie i negocjacjach.',
        image: service_0
    },
    {
        id: 1,
        name: 'Prawo rodzinne',
        description: 'Wsparcie w sprawach rozwodowych, alimentacyjnych oraz dotyczących władzy rodzicielskiej. Działamy z wyczuciem i dyskrecją.',
        image: service_1
    },
    {
        id: 2,
        name: 'Prawo karne',
        description: 'Reprezentujemy oskarżonych i pokrzywdzonych na każdym etapie postępowania karnego. Skuteczna obrona i doradztwo.',
        image: service_2
    },
    {
        id: 3,
        name: 'Prawo pracy',
        description: 'Pomagamy pracownikom i pracodawcom w sprawach umów, wypowiedzeń, mobbingu i wypadków przy pracy.',
        image: service_3
    },
    {
        id: 4,
        name: 'Prawo gospodarcze',
        description: 'Kompleksowa obsługa prawna firm: zakładanie działalności, umowy handlowe, spory między przedsiębiorcami.',
        image: service_4
    },
    {
        id: 5,
        name: 'Odszkodowania',
        description: 'Uzyskujemy należne odszkodowania z tytułu wypadków, błędów medycznych i szkód majątkowych. Skutecznie i z zaangażowaniem.',
        image: service_5
    },
];

const Services = () => {
    return (
        <Section id="services" className="bg-white relative">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Specjalizacje</h2>
                <p className="text-center mb-12 text-lg text-slate-600 max-w-2xl mx-auto">
                    Oferujemy szeroki zakres usług prawnych, dostosowanych do potrzeb klientów indywidualnych oraz firm. Nasze specjalizacje obejmują kluczowe obszary prawa.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {DUMMY_SERVICES.map((spec, idx) => (
                        <div
                            key={spec.id}
                            className={`bg-white p-6 rounded-2xl shadow transition-all 
                hover:-translate-y-1 hover:shadow-xl 
                border-t-4 border-transparent hover:border-[var(--color-accent)] 
                opacity-0 animate-fadeInUp [animation-delay:${idx * 100}ms]`}
                        >
                            <Picture
                                data={spec.image}
                                alt={`Specjalizacja: ${spec.name}`}
                                className="w-full rounded-xl mb-4"
                            />
                            <h3 className="text-xl font-medium mb-2">{spec.name}</h3>
                            <p className="text-sm text-slate-700">{spec.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Services;
