import React from 'react'
import Section from "../shared/Section";

const Services = () => {
    return (
        <Section id="services">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-12">Specjalizacje</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Prawo cywilne",
                        "Prawo rodzinne",
                        "Prawo karne",
                        "Prawo pracy",
                        "Prawo gospodarcze",
                        "Odszkodowania"
                    ].map((spec, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow transition-all hover:-translate-y-1 hover:shadow-xl border-t-4 border-transparent hover:border-[var(--color-accent)]"
                        >
                            <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-sm text-gray-500">
                                Zdjęcie
                            </div>
                            <h3 className="text-xl font-medium mb-2">{spec}</h3>
                            <p className="text-sm">Profesjonalna pomoc i doradztwo w zakresie {spec.toLowerCase()}.</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Services