import React from 'react';

const Footer= () => {
    return (
        <footer id="Footer" className="footer">  
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <p className="psuedologo m-0">JACK FLOYD</p>
                    <p className="pos">UI Developer and Designer</p>
                </div>
                <div>
                    <a href="https://linkedin.com/in/jackfloyd" className="text-decoration-none fs-2"><i class="bi bi-linkedin"></i></a> 
                    &#160; &#160;
                    <a href="mailto:mjfloyd3@gmail.com" className="text-decoration-none fs-2 mail-icon"><i class="bi bi-envelope-fill"></i></a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;