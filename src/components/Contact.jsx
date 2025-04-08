import { useState } from 'react'
import Section from "../shared/Section";

const Contact = () => {

    const [formSent, setFormSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSent(true);
        setTimeout(() => setFormSent(false), 3000);
    };

    return (
        <Section id="contact">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Kontakt</h2>
                {formSent ? (
                    <div className="text-green-600 text-lg font-semibold transition-opacity duration-500">Dziękujemy! Wiadomość została wysłana.</div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                            type="text"
                            placeholder="Imię i nazwisko"
                            required
                        />
                        <input
                            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                            type="email"
                            placeholder="Adres e-mail"
                            required
                        />
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                            rows="5"
                            placeholder="Wiadomość"
                            required
                        ></textarea>
                        <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl shadow transition-transform hover:scale-105 active:scale-95 duration-200">
                            Wyślij
                        </button>
                    </form>
                )}
            </div>
        </Section>
    )
}

export default Contact