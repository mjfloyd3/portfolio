import React from 'react';
import { Link } from 'react-router-dom';
import './work.css';
import Preview from '../../assets/images/portal-preview.png';
import NYCKnowsPreview from '../../assets/images/nycknowspreview3.png';
import EnhancedPreview from '../../assets/images/template-preview.png';
import RedesignPreview from '../../assets/images/site-redesign-preview.png';
import ProductPreview from '../../assets/images/product-template-preview.png';


const Work = () => {
    return (
        <section id="Work">  
            <div className="container">     
                <div className="workContent">
                        <div className="row my-5 py-md-5 py-0">
                            <h3 id="selectedwork">Selected work</h3>
                            <div className="col">
                                <a className="text-decoration-none" href="https://xd.adobe.com/view/0edfc61a-4a8c-4575-ab4b-f706505df158-5b8c">
                                    <img src={Preview} alt="portal preview" width="90%" />
                                    <h4 className="mt-3">Research Portal Landing Page &#160; &#160;<i class="bi bi-box-arrow-up-right"></i></h4>
                                </a>
                                <p class="m-0 small">UI Design | Product Design</p>
                            </div>
                        </div>
                        <div className="row my-5 py-md-5 py-0">
                            <div className="col">
                                <Link to="Sstemplates" className="text-decoration-none">
                                    <img src={EnhancedPreview} alt="portal preview" width="90%" />
                                    <h4 class="mt-3">Research Report Templates</h4>
                                </Link>
                                <p className="m-0 small">Web Development</p>
                            </div>
                        </div>
                        <div className="row my-5 py-md-5 py-0">
                            <div className="col">
                                <Link to="WebsiteRedesign" className="text-decoration-none">
                                    <img src={RedesignPreview} alt="portal preview" width="90%" />
                                    <h4 className="mt-3">BlueMatrix Website Redesign</h4>
                                </Link>
                                <p className="m-0 small">Web Design | Web Development</p>
                            </div>
                        </div>
                        <div className="row my-5 py-md-5 py-0">
                            <div className="col">
                                <Link to="OfficialTemplate" className="text-decoration-none">
                                    <img src={ProductPreview} alt="Official Communication Template" width="90%" />
                                    <h4 className="mt-3">Official Product Communications Template</h4>
                                </Link>
                                <p class="m-0 small">Web Design | Web Development</p>
                            </div>
                        </div>
                        <div className="row my-5 py-md-5 py-0">
                            <div className="col">
                                <a className="text-decoration-none" href="https://mjfloyd3.github.io/NYC-Knows/">
                                    <img src={NYCKnowsPreview} alt="NYC Knows" width="90%" />
                                    <h4 className="mt-3">NYC Knows &#160; &#160;<i class="bi bi-box-arrow-up-right"></i></h4>
                                </a>
                                <p className="m-0 small">Bootcamp Final Project | Web Development | Data Visualization</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Work;