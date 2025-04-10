import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import team_0 from '../assets/team_0.jpg?format=webp';
import team_1 from '../assets/team_1.jpg?format=webp';
import team_2 from '../assets/team_2.jpg?format=webp';

const DUMMY_TEAM = [
    {
        id: 0,
        name: 'Jane Doe',
        role: 'Radca prawny',
        image: team_0
    }, {
        id: 1,
        name: 'Jack Doe',
        role: 'Adwokat',
        image: team_1
    }, {
        id: 2,
        name: 'Joanne Doe',
        role: 'Prawnik',
        image: team_2
    }
]

const Team = () => {
    return (
        <Section id="team" background={'bg-[#fefcf9]'}>
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