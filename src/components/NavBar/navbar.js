import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../assets/Resume-wwJF.pdf';
import './navbar.css';

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div>
              <Link to="/" className="logo">JF</Link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item pe-4">
                  <a className="nav-link" href="#selectedwork">Work</a>
                </li>
                <li className="nav-item pe-4">
                  <a href="/about" className="nav-link">About</a>
                </li>
              </ul>
              <a className="btn btn-primary" target="_blank" href = {Pdf}>View Resume</a>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;