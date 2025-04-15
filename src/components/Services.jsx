import React from 'react';
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import { services } from '../data';

const Services = () => {
    return (
        <Section id="services" className="bg-white relative">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Specjalizacje</h2>
                <p className="text-center mb-12 text-lg text-slate-600 max-w-2xl mx-auto">
                    Oferujemy szeroki zakres usług prawnych, dostosowanych do potrzeb klientów indywidualnych oraz firm. Nasze specjalizacje obejmują kluczowe obszary prawa.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((spec, idx) => (
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
