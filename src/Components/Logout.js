import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const linkStyle = {
        color: 'white',
        backgroundColor: 'skyblue', 
        padding: '10px 20px',
        borderRadius: '10px',
        textDecoration: 'none', 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: 'green' }}>Thanks for using our services</h2>
            <a href="/Login" className='btn btn-info' style={linkStyle}>
                Click here to login again
            </a>
        </div>
    );
};

export default Logout;
