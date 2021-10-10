import React from 'react';
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <a href="/"> A place to connect with fellow VITians ! 💥</a>
            <div style={{ 
                backgroundImage: `url("https://academicscc.vit.ac.in/adwordsengg2017/img/vit1.jpg")` 
                }}>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}
