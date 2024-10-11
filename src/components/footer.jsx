import React from 'react';
import LOGO from "../assets/img/LOGO.png";
import '../assets/css/footer.css'

const footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={LOGO} alt="Logo Kasa" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default footer;