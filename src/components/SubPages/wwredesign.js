import React from 'react';
import './wwredesign.css';
import Wireframe from '../../assets/images/bm-wireframe.png';
import FinalPages from '../../assets/images/final-page-collection.png';
import SampleGraphics from '../../assets/images/samplegraphics.png';
import DesignSystem from '../../assets/images/designsystem.png';

const WWRedesign = () => {
    return (
        <section id="site-redesign">
            <div className="container siteredesignContent pt-5">
                <div className="row">
                    <div className="col-lg-8 pb-4">
                        <h1 className="fw-normal fs-4">BlueMatrix</h1>
                        <h2 className="fw-bold mb-4">Company Website Redesign</h2>
                        <div className="d-flex justify-content-start">
                            <div className="pe-md-5 pe-3">
                                <p className="m-0">My Role</p>
                                <p className="m-0 fw-light">Design & Development Lead</p>
                            </div>
                            <div className="pe-md-5 pe-3">
                                <p className="m-0">The Team</p>
                                <p className="m-0 fw-light">1x Copywriter (Marketing team)</p>
                                <p className="m-0 fw-light">2x Designers</p>
                            </div>
                            <div>
                                <p className="m-0">Year</p>
                                <p className="m-0 fw-light">2019</p>
                            </div>
                        </div>
                        <p className="mt-md-0 mt-3 mb-0">Tools</p>
                        <p className="m-0 fw-light mb-5">Adobe XD, Illustrator, HTML/SCSS, Bootstrap, Javascript, Java</p>
                        <p className="lead">Early on at my time at BlueMatrix, I was tasked with leading the design, development and implementation of the company website, which was due for an updated look and feel. Outside of aesthetics, some of the primary goals of the redesign were to: </p>
                        <ul className="fw-light">
                            <li>reflect the firm's competitive marketshare</li>
                            <li>guide existing clients to login to our products and/or request support</li>
                            <li>drive prospective clients to reach out via sales contact form</li>
                            <li>improve SEO performance</li>
                            <li>improve accessibility and optimize for all device sizes</li>
                        </ul>
                        <p className="fw-light">Working alongside our Marketing lead who formulated the copy to be used on each webpage, I came up with low-fidelity wireframes to structure the content and layouts of each planned page. From there, a fellow designer and I worked on mood boards, design systems and graphic elements. Throughout this project, we regularly made presentations to company management to make sure we were aligned on the vision for the end product, ultimately incorporating feedback and suggestions from everyone from the CEO to Sales and Product leads.</p>
                        <p className="fw-light">After the designs and mockups were approved, I lead the development and implementation of all of the webpages including building functionality for forms, logins and blog post entry's.</p>
                    </div>
            </div>
        </div>
        <div className="bm-highlights py-4">
            <div className="text-center">
                <img class="img-wireframe" src={Wireframe} width="400" alt="website redesign wireframe"/>
                <p className="text-center text-muted mt-2 mb-0 fs-6">Sample of an early wireframe</p>
            </div>
            <div className="d-flex justify-content-center p-3">
                <div class="pe-2">
                    <img class="img" src={DesignSystem} width="500" alt="design system"/>
                </div>
                <div class="ps-2">
                    <img class="img" src={SampleGraphics} width="350" alt="design system"/>
                </div>
            </div>
            <p className="text-center text-muted mt-2 mb-0 fs-6">Design System used for the website along with sample of graphics used throught the web pages</p>
        </div>
        <div className="text-center py-5 my-5 px-1">
            <img src={FinalPages} width="90%"/>
            <p className="text-center text-muted mt-2 mb-0 fs-6">Final collection of page mockups that were built and implemented for the company website</p>
        </div>
        </section>
    )
}

export default WWRedesign;
