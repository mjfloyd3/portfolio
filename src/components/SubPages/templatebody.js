import React from 'react';
import Enhanced from '../../assets/images/enhanced-preview.png';
import BridgeImg from '../../assets/images/bridge-theme-img.png';
import './templates.css';

const Template = () => {
    return (
        <section id="Templates">  
            <div className="container templateContent">     
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="fw-normal fs-4">BlueMatrix</h1>
                        <h2 className="fw-bold mb-4">Development of Research Report Templates</h2>
                        <p className="fw-light">My primary responsibility at BlueMatrix was to develop report templates for clients using our software to author research. This included the implementation of complex logic around their financial models while generating outputs for PDF, web and email formats for their content.</p>
                        <p className="fw-light">This page shows snippets of some of my client projects and development efforts at BlueMatrix.</p>
                        <small className="fw-light">Tools: XSLT, Javascript, Bootstrap, ApacheFOP, SASS</small>
                        <small className="fw-light d-block mt-2 mb-5">Selected list of Clients: National Bank of Canada, Credit Suisse, Needham, Oppenheimer, PI Financial, MassMutual, Santander, TD Bank</small>
                        <a className="btn btn-outline-primary" target="_blank" href="https://mjfloyd3.github.io/bm-stylesheet/">Sample Client Demo &#160; <i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row bm-highlights mt-5">
                <div className="col-12 text-center p-4">
                    <img src={Enhanced} width="60%"/>
                </div>
                <div className="col-12 text-center p-4">
                    <img src={BridgeImg} width="60%"/>
                </div>
            </div>

        </section>
    )
}

export default Template;