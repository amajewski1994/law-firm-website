import React from 'react'

const Button = ({ children, className = '' }) => {
    return (
        <button
            className={`bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl transition ${className}`}
        >
            {children}
        </button>
    )
}

export default Button