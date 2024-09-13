import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <section id="Intro">  
            <div class="container">     
                <div className="row introContent animate__animated animate__fadeInLeft">
                    <div class="col-lg-9">
                    <div class="d-md-flex align-items-baseline">
                    <h1>Hi, I'm Jack Floyd</h1>
                    </div>
                    <p class="lead fw-light mt-4 fs-2">
                        I'm a user interface developer and designer interested in creative and humane tech. For the last six years I've been building innovative and accessible web applications for a leading SaaS fintech firm. Currently based in New York, NY.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;