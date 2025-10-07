import React from 'react';

import OIP from './../assets/OIP.jpg'

class Aboutme extends React.Component{
    render(){
        return(
            <div className="about-me">
        <div className="title">
            <h1>
                01. Tentang Saya
            </h1>
            <div className="line">
               
            </div>
        </div>
        <div>
            <p>
Perkenalkan, saya <b>Muhammad Rafli Rosid</b>, mahasiswa <b>Computer Science di Binus University</b>. 
Saya memiliki minat besar dalam <b>pengembangan web</b> dan terus belajar untuk menciptakan pengalaman digital yang menarik dan fungsional.
</p>

        </div>
        <div>
            <img src={OIP} width="250px" height="250px" style={{ marginTop: '20px' }} />
        </div>
      </div>
        )
    }
}

export default Aboutme