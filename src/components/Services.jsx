import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import about from '../assets/hero.jpg?format=webp';

const DUMMY_SERVICES = [
    {
        id: 0,
        name: 'Prawo cywilne',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa cywilnego.',
        image: about
    }, {
        id: 1,
        name: 'Prawo rodzinne',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa rodzinnego.',
        image: about
    }, {
        id: 2,
        name: 'Prawo karne',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa karnego.',
        image: about
    }, {
        id: 3,
        name: 'Prawo pracy',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa pracy.',
        image: about
    }, {
        id: 4,
        name: 'Prawo gospodarcze',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa gospodarczego.',
        image: about
    }, {
        id: 5,
        name: 'Odszkodowania',
        description: 'Profesjonalna pomoc i doradztwo w zakresie odszkodowania.',
        image: about
    },
]

const Services = () => {
    return (
        <Section id="services" background='bg-slate-200'>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-12">Specjalizacje</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {DUMMY_SERVICES.map((spec, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow transition-all hover:-translate-y-1 hover:shadow-xl border-t-4 border-transparent hover:border-[var(--color-accent)]"
                        >
                            <Picture data={spec.image} alt={spec.name} className={`w-full rounded-xl mb-4`} />
                            <h3 className="text-xl font-medium mb-2">{spec.name}</h3>
                            <p className="text-sm">{spec.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Services