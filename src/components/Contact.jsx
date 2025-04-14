import { useState } from 'react';
import Section from "../shared/Section";
import Button from '../shared/Button';

const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4013770923957!2d21.012228076733573!3d52.22967547976165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669366b8ed%3A0x40f4d8f61a36c0a2!2sWarszawa!5e0!3m2!1spl!2spl!4v1712700000000!5m2!1spl!2spl";

const Contact = () => {
    const [formSent, setFormSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSent(true);
        setTimeout(() => setFormSent(false), 3000);
    };

    return (
        <Section id="contact" className="bg-[#f9f9f6] relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-4">Kontakt</h2>
                <p className="text-center mb-12 text-lg text-slate-600 mx-auto">
                    Wypełnij formularz lub skontaktuj się z nami bezpośrednio – jesteśmy do Twojej dyspozycji.
                </p>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Mapa */}
                    <div className="w-full md:w-1/2 h-80 md:h-auto rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            title="Mapa kancelarii"
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full"
                        ></iframe>
                    </div>

                    {/* Formularz */}
                    <div className="w-full md:w-1/2">
                        {formSent ? (
                            <div className="text-green-600 text-lg font-semibold transition-opacity duration-500 mb-8">
                                Dziękujemy za kontakt! Odezwiemy się tak szybko, jak to możliwe.
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 opacity-0 animate-fadeInUp [animation-delay:100ms]"
                            >
                                <div>
                                    <label htmlFor="name" className="sr-only">Imię i nazwisko</label>
                                    <input
                                        id="name"
                                        className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                                        type="text"
                                        placeholder="Imię i nazwisko"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">Adres e-mail</label>
                                    <input
                                        id="email"
                                        className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                                        type="email"
                                        placeholder="Adres e-mail"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="sr-only">Temat wiadomości</label>
                                    <input
                                        id="subject"
                                        className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                                        type="text"
                                        placeholder="Temat wiadomości"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="sr-only">Wiadomość</label>
                                    <textarea
                                        id="message"
                                        className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                                        rows="5"
                                        placeholder="Wpisz swoją wiadomość..."
                                        required
                                    ></textarea>
                                </div>

                                <Button className="shadow hover:scale-105 active:scale-95 duration-200">
                                    Wyślij
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;

