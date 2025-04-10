import React, { useState, useEffect, useRef } from 'react';
import Section from "../shared/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircleRight, faCircleLeft } from '@fortawesome/free-regular-svg-icons'

const DUMMY_OPINIONS = [
    {
        id: 0,
        name: 'Adrian',
        description: 'Profesjonalizm i skuteczność. Polecam z całego serca!',
    },
    {
        id: 1,
        name: 'John Doe',
        description: 'Świetne podejście do klienta! Z pewnością skorzystam ponownie z tej firmy.',
    },
    {
        id: 2,
        name: 'Jane Doe',
        description: 'Pełne zaangażowanie w sprawę i konkretne podejście.',
    },
    {
        id: 3,
        name: 'Anna K.',
        description: 'Zdecydowanie najlepsza kancelaria, z jaką współpracowałam.',
    },
];

const Opinions = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(true);

    const opinions = [
        DUMMY_OPINIONS[DUMMY_OPINIONS.length - 1],
        ...DUMMY_OPINIONS,
        DUMMY_OPINIONS[0],
    ];

    const intervalRef = useRef(null);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1));
            setTransitioning(true);
        }, 5000);
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => prev + 1);
        setTransitioning(true);
        resetInterval();
    };

    const handlePrev = () => {
        setActiveIndex((prev) => prev - 1);
        setTransitioning(true);
        resetInterval();
    };

    const handleTransitionEnd = () => {
        if (activeIndex === opinions.length - 1) {
            setTransitioning(false);
            setActiveIndex(1);
        } else if (activeIndex === 0) {
            setTransitioning(false);
            setActiveIndex(opinions.length - 2);
        }
    };


    return (
        <Section background='bg-gradient-to-r from-slate-50 to-white'>
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-24 fill-[#fefcf9]"
                >
                    <path d="M0,0V46.29c47.61,22,98.52,29,146.77,14.44C230.92,36,284,0,339.59,0s108.18,36,166.24,50.73C627.4,77,684.15,54,739.6,29.87,796.64,5,851.14-8.87,900,6.25c42.61,13.45,79.25,38.62,120,50.73V0Z" />
                </svg>
            </div>

            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12">Opinie klientów</h2>

                <div className="mb-12 flex h-0.5 items-center">
                    <div className="flex-1 bg-primary h-full" />
                    <div className="mx-4 flex justify-center items-center">
                        {Array(5).fill(0).map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStar} className="text-accent mx-1" />
                        ))}
                    </div>
                    <div className="flex-1 bg-primary h-full" />
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * (100 / opinions.length)}%)`,
                            transition: transitioning ? 'transform 0.5s ease-in-out' : 'none',
                            width: `${opinions.length * 100}%`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {opinions.map((opinion, index) => (
                            <div
                                key={index}
                                className="w-full"
                            >
                                <div className="text-lg mb-4 px-8">"{opinion.description}"</div>
                                <div className="italic">{opinion.name}</div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl hover:scale-125 transition-transform"
                    >
                        <FontAwesomeIcon icon={faCircleLeft} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl hover:scale-125 transition-transform"
                    >
                        <FontAwesomeIcon icon={faCircleRight} />
                    </button>
                </div>

            </div>
        </Section >
    );
};

export default Opinions;
