import React from 'react'
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import team from '../assets/team-placeholder.jpg?w=300&format=webp';

const Team = () => {
    return (
        <Section id="team">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12">Zespół</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { name: "Anna Wojtas", role: "Radca prawny" },
                        { name: "Michał Nowak", role: "Adwokat" },
                        { name: "Katarzyna Zielińska", role: "Aplikant radcowski" },
                    ].map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow transition-transform hover:scale-105 hover:shadow-lg"
                        >
                            <Picture data={team} alt={member.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
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