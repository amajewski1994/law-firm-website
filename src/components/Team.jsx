import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import about from '../assets/hero.jpg?format=webp';

const DUMMY_TEAM = [
    {
        id: 0,
        name: 'John Doe',
        role: 'Radca prawny',
        image: about
    }, {
        id: 1,
        name: 'Jane Doe',
        role: 'Adwokat',
        image: about
    }, {
        id: 2,
        name: 'Jack Doe',
        role: 'Prawnik',
        image: about
    }
]

const Team = () => {
    return (
        <Section id="team">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12">Zespół</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {DUMMY_TEAM.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow transition-transform hover:scale-105 hover:shadow-lg"
                        >
                            <Picture data={member.image} alt={member.name} className="w-full h-96 object-cover rounded-md mx-auto mb-4" />
                            <h3 className="text-lg font-medium">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Team