import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="py-8 bg-[var(--color-primary)] text-white text-center text-sm">
            <div className="mb-4">
                <p className="font-semibold">Kancelaria Prawna</p>
                <p>ul. Przykładowa 10, 00-001 Warszawa</p>
                <p>
                    Tel: <a href="tel:+48123456789" className="underline">+48 123 456 789</a>
                </p>
                <p>
                    E-mail: <a href="mailto:kontakt@kancelaria.pl" className="underline">kontakt@kancelaria.pl</a>
                </p>
            </div>

            {/* Ikony sociali */}
            <div className="flex justify-center gap-4 mt-4 text-white text-xl">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>

            <div className="mt-4">&copy; {new Date().getFullYear()} Adrian Majewski. Wszelkie prawa zastrzeżone.</div>

            <div className="text-xs text-white/70 mt-1">
                Projekt i wykonanie: Adrian Majewski
            </div>
        </footer>
    );
};

export default Footer;
