import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../assets/img/LOGO.png";
import '../assets/css/header.css'

const header = () => {
    return (
        <header>
            <div className="logo">
                <img src={LOGO} alt="Logo Kasa" />
            </div>
            <nav>
                <Link to="nav">Accueil</Link>
                <Link to="nav">A propos</Link>
            </nav>
        </header>
    );
};

export default header;