import React from 'react';

const Picture = ({ data, alt, className = '', style = {} }) => {
    if (!data) return null;
    return (
        <picture>
            <img
                src={data}
                alt={alt}
                loading="lazy"
                style={{
                    // backgroundImage: `url(${data.placeholder})`,
                    backgroundSize: 'cover',
                    ...style
                }}
                className={`${className} transition-opacity duration-700`}
            />
        </picture>
    );
};

export default Picture;
