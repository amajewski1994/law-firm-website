import React from 'react';
import Section from "../shared/Section";
import Picture from '../shared/Picture';
import { team } from '../data';

const Team = () => {
    return (
        <Section id="team" className="bg-[#fefcf9] relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">Zespół</h2>
                <p className="text-center mb-12 text-lg text-slate-600 max-w-2xl mx-auto">
                    Nasz zespół tworzą doświadczeni prawnicy, którzy łączą wiedzę i praktykę, by skutecznie wspierać naszych klientów. Każdy z nas specjalizuje się w innym obszarze prawa, co pozwala zapewnić kompleksową obsługę.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {team.map((member, idx) => (
                        <div
                            key={member.id}
                            className={`opacity-0 animate-fadeInUp [animation-delay:${idx * 150}ms]`}
                        >
                            <div className="bg-white p-6 rounded-2xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Picture
                                    data={member.image}
                                    alt={`Członek zespołu: ${member.name}`}
                                    className="w-full h-72 md:h-96 object-cover rounded-md mx-auto mb-4"
                                />
                                <h3 className="text-lg font-medium">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                                <p className="text-sm text-slate-600 mt-2">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Team;
