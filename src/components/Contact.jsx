import { useState } from 'react'
import Section from "../shared/Section";
import Button from '../shared/Button';

const Contact = () => {
    const [formSent, setFormSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSent(true);
        setTimeout(() => setFormSent(false), 3000);
    };

    return (
        <Section id="contact" background={'bg-[#f9f9f6]'}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Kontakt</h2>

                {formSent ? (
                    <div className="text-green-600 text-lg font-semibold transition-opacity duration-500 mb-12">
                        Dziękujemy! Wiadomość została wysłana.
                    </div>
                ) : (
                    <form className="space-y-6 mb-12" onSubmit={handleSubmit}>
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
                        <Button className={'shadow hover:scale-105 active:scale-95 duration-200'}>Wyślij</Button>
                    </form>
                )}

                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        title="Mapa kancelarii"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4013770923957!2d21.012228076733573!3d52.22967547976165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669366b8ed%3A0x40f4d8f61a36c0a2!2sWarszawa!5e0!3m2!1spl!2spl!4v1712700000000!5m2!1spl!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
