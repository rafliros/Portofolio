import React from 'react';

import OIP from './../assets/OIP.jpg'

class Aboutme extends React.Component{
    render(){
        return(
            <div className="about-me">
                <div className="title">
                    <h1>01. Tentang Saya</h1>
                    <div className="line"></div>
                </div>
                <div className="content">
                    <div className="text-section">
                        <p className="intro">
                            Perkenalkan, saya <span className="highlight">Muhammad Rafli Rosid</span>, 
                            mahasiswa <span className="highlight">Computer Science di Binus University</span>.
                        </p>
                        <p className="description">
                            Saya memiliki minat besar dalam <span className="highlight">pengembangan web</span> dan 
                            terus belajar untuk menciptakan pengalaman digital yang menarik dan 
                            fungsional.
                        </p>
                    </div>
                    <div className="profile-section">
                        <div className="profile-img">
                            <img src={OIP} alt="Muhammad Rafli Rosid" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme