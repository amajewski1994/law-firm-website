import { useEffect, useState, useRef } from "react";

const Section = ({ id, children, heroSection = false }) => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`scroll-mt-24 transition-all duration-700 ease-out will-change-transform ${heroSection ? 'h-screen mb-20' : 'py-20 px-6'} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            {children}
        </section>
    );
};

export default Section