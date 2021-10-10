import React from 'react';
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <a href="/">VIT Links! 💥</a>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}
