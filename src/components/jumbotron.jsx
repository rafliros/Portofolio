import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="jumbotron-left">
                    <div className="social-links">
                        <a href="https://github.com/rafliros" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/muhammad-rafli-rosid" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="main-jumbotron">
                    <div className="hello">
                        <span className="greeting">👋 Hallo, Nama Saya</span>
                    </div>
                    <div className="name-section">
                        <h1 className="my-name">
                            Muhammad Rafli Rosid
                        </h1>
                        <h2 className="subtitle">
                            Full Stack Web Development
                        </h2>
                    </div>
                    <div className="description">
                        <p>
                            Seorang mahasiswa Computer Science di Binus University yang
                            passionate dalam menciptakan pengalaman digital yang menarik
                            dan fungsional melalui kode.
                        </p>
                    </div>
                    <div className="cta-buttons">
                        <button className="btn-primary">
                            Lihat Portfolio
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => window.open('https://drive.google.com/uc?export=download&id=1hT_vAlAxYodRiESNwoyyawD_zA8h82bf', '_blank')}
                        >
                            Download CV
                        </button>

                    </div>
                </div>
                <div className="jumbotron-right">
                    <div className="email">
                        <a href="mailto:rafliros06@gmail.com">
                            rafliros06@gmail.com
                        </a>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        )
    }
}

export default Jumbotron