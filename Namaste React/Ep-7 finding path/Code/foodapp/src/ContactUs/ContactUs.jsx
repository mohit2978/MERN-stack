const ContactUs = () => {
    const containerStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
        color: '#fff',
        minHeight: '100vh',
    };

    const formStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: 'auto',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#ff6b6b',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h1>
            <div style={formStyle}>
                <form>
                    <input type="text" placeholder="Your Name" style={inputStyle} required />
                    <input type="email" placeholder="Your Email" style={inputStyle} required />
                    <textarea placeholder="Your Message" rows="5" style={inputStyle} required></textarea>
                    <button type="submit" style={buttonStyle}>Send Message</button>
                </form>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h3>Or reach us directly:</h3>
                <p>Email: contact@restaurantapp.com</p>
                <p>Phone: +91 98765 43210</p>
                <img
                    src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60"
                    alt="Contact Us"
                    style={{ marginTop: '20px', maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                />
            </div>
        </div>
    );
};

export default ContactUs;
