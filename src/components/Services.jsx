import React from 'react'
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
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa cywilnego.',
        image: service_0
    }, {
        id: 1,
        name: 'Prawo rodzinne',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa rodzinnego.',
        image: service_1
    }, {
        id: 2,
        name: 'Prawo karne',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa karnego.',
        image: service_2
    }, {
        id: 3,
        name: 'Prawo pracy',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa pracy.',
        image: service_3
    }, {
        id: 4,
        name: 'Prawo gospodarcze',
        description: 'Profesjonalna pomoc i doradztwo w zakresie prawa gospodarczego.',
        image: service_4
    }, {
        id: 5,
        name: 'Odszkodowania',
        description: 'Profesjonalna pomoc i doradztwo w zakresie odszkodowania.',
        image: service_5
    },
]

const Services = () => {
    return (
        <Section id="services" background='bg-white'>
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