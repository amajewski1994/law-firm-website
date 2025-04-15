import React, { useState, useEffect, useRef } from 'react';
import Section from "../shared/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircleRight, faCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { opinions } from '../data';

const Opinions = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(true);

    const opinionsArr = [
        opinions[opinions.length - 1],
        ...opinions,
        opinions[0],
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
        if (activeIndex === opinionsArr.length - 1) {
            setTransitioning(false);
            setActiveIndex(1);
        } else if (activeIndex === 0) {
            setTransitioning(false);
            setActiveIndex(opinionsArr.length - 2);
        }
    };


    return (
        <Section background='bg-gradient-to-r from-slate-50 to-white'>
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="w-full h-24 fill-slate-50"
                >
                    <path
                        d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,138.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64V0H0Z"
                    />
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
                            transform: `translateX(-${activeIndex * (100 / opinionsArr.length)}%)`,
                            transition: transitioning ? 'transform 0.5s ease-in-out' : 'none',
                            width: `${opinionsArr.length * 100}%`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {opinionsArr.map((opinion, index) => (
                            <div
                                key={index}
                                className="w-full"
                            >
                                <div className="text-lg mb-4 px-8">"{opinion.description}"</div>
                                <div className="italic">{opinion.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Nawigacja */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-secondary hover:text-[var(--color-primary)] transition-all"
                    >
                        <FontAwesomeIcon icon={faCircleLeft} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-secondary hover:text-[var(--color-primary)] transition-all"
                    >
                        <FontAwesomeIcon icon={faCircleRight} />
                    </button>

                    {/* Aria live dla screen readerów */}
                    <div aria-live="polite" className="sr-only">
                        {opinionsArr[activeIndex]?.description}
                    </div>
                </div>

            </div>
        </Section >
    );
};

export default Opinions;