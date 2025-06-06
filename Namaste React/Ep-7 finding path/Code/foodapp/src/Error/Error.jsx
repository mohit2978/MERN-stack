import { useNavigate,useRouteError } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ErrorPage = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // trigger fade-in animation
        setFadeIn(true);
    }, []);

    const containerStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1650&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        transition: 'opacity 1s ease',
        opacity: fadeIn ? 1 : 0,
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '12px 24px',
        backgroundColor: '#ff6b6b',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const handleBackHome = () => {
        navigate('/');
    };
    const err=useRouteError();
    console.log(err);
    return (

        <div style={containerStyle}>
            <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
            <h2 style={{ marginTop: '10px' }}>Oops! Page Not Found</h2>
            <p style={{ maxWidth: '500px', marginTop: '10px' }}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                style={buttonStyle}
                onClick={handleBackHome}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4b4b'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b6b'}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;
