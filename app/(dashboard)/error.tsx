'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '200px',
            gap: '1rem'
        }}>
            <h2 style={{ color: 'var(--danger-color)' }}>Something went wrong!</h2>
            <button
                onClick={() => reset()}
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer'
                }}
            >
                Try again
            </button>
        </div>
    );
}
