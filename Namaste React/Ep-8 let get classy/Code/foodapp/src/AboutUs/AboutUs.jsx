const AboutUs = () => {
    const containerStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1555992336-03a23c9d5f6c?auto=format&fit=crop&w=1650&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
        color: '#fff',
        minHeight: '100vh',
    };

    const contentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'center',
    };

    const imageStyle = {
        maxWidth: '100%',
        borderRadius: '10px',
        marginTop: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>Foodie's Paradise</strong>! We are a team of food enthusiasts passionate about helping you discover the best places to eat.
                </p>
                <p>
                    Our mission is to connect people with amazing restaurants and culinary experiences. Whether you crave authentic street food or fine dining, we are here to guide you.
                </p>
                <p>
                    Founded in 2025, Foodie's Paradise has grown into a trusted platform for food lovers across the country.
                </p>
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60"
                    alt="Team Cooking"
                    style={imageStyle}
                />
                <p style={{ marginTop: '20px' }}>
                    Thank you for being part of our journey! Happy dining. 🍽️✨
                </p>
                <img
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=60"
                    alt="Restaurant Ambience"
                    style={imageStyle}
                />
            </div>
        </div>
    );
};

export default AboutUs;
