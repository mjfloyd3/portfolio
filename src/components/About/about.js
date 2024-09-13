import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="About">  
            <div className="container pt-5">     
                <div className="row aboutContent">
                    <div className="col-lg-6">
                    <h3>About</h3>
                    <p className="fw-light">
                    I am a Front-End Developer and UI/Product Designer with a focus on building accessible web applications. Combining design and development, I am passionate about creating software that not only looks good but is also highly functional and well-built.
                    </p>
                    <p class="fw-light">For the past 6+ years in my current role at a leading SaaS firm, I've had the privilege of designing products and building UI's relied on by some of the world's largest investment research and wealth management firms. </p>
                    <p className="fw-light">Away from the computer screen, I enjoy spending time with friends and family; photography, theater, biking and skiing. While I currently reside in Brooklyn, I am a proud Midwesterner, originally from Milwaukee, Wisconsin.</p>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                    <h3 className="ps-3 mt-lg-0 mt-5">Skills</h3>
                    <div className="d-flex flex-wrap">
                    <i class="devicon-html5-plain-wordmark colored" title="HTML5"></i>
                    <i class="devicon-css3-plain-wordmark colored" title="CSS3"></i>
                    <i class="devicon-sass-original colored" title="Sass"></i>
                    <i class="devicon-less-plain-wordmark colored" title="Less"></i>
                    <i class="devicon-bootstrap-plain colored" title="Bootstrap"></i>
                    <i class="devicon-bulma-plain colored" title="Bulma"></i>
                    <i class="devicon-xml-plain colored" title="XML"></i>
                    <i class="devicon-javascript-plain" title="Javascript"></i>
                    <i class="devicon-vuejs-plain-wordmark colored" title="VueJs"></i>
                    <i class="devicon-react-original-wordmark colored" title="React"></i>
                    <i class="devicon-git-plain-wordmark" title="Git"></i>
                    <i class="devicon-intellij-plain colored" title="IntelliJ"></i>
                    <i class="devicon-d3js-plain colored" title="D3js"></i>
                    <i class="devicon-xd-plain colored" title="Adobe XD"></i>
                    <i class="devicon-figma-plain colored" title="Figma"></i>
                    <i class="devicon-apache-plain-wordmark colored" title="Apache FOP"></i>
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;