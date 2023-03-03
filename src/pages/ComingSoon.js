import React from 'react';
import './ComingSoon.css';
import Logo from './logo.png';

function ComingSoon() {
    return (
        <div className="coming-soon-page">
            <div className="navbar">
                <img src={Logo} alt="logo" />
            </div>

            <div className="content">
                <h1>Under Construction</h1>
                <h2>Get Queue'd Coming Soon !</h2>
                <p>Stay tuned for updates and exciting news about our launch.</p>



            </div>
            <div className="footer">
                <p>Copyright © {new Date().getFullYear()}
                    <a href="https://www.lowes.com/"> Lowe's</a>. All rights reserved.</p>
            </div>
        </div>
    );
}

export default ComingSoon;
