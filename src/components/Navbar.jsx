import React from 'react';
import "./Navbar.css"

export default function Navbar() {
    return (
       <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <a class="navbar-brand" href="#"><img id="imga" src="/image-removebg-preview (1).png" ></img></a>
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div id="navflr" class="navbar-nav">
           <a class="nav-item nav-link" href="#">Home</a>
      <a class="nav-item nav-link" href="/about">About</a>
      <a class="nav-item nav-link" href="/contact">Contact</a>
     
    </div>
  </div>
</nav>
    );
}

