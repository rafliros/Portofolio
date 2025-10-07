import React from 'react';

class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <div className="jumbotron-left">
                    
                    <div className="line">
                        
                    </div>
                </div>
                <div className="main-jumbotron">
                    <div className="hello">
                        Hallo,Nama Saya
                    </div>
                    <div>
                        <h1 className="my-name">
                            Muhammad Rafli Rosid. <br />
                            
                        </h1>
                    </div>
                    <div>
                        <p>
                            Saya adalah seorang mahasiswa Bina Nusantara University
                        </p>
                    </div>
                    <div>
                        <button id="btn-real">
                            Check out my course!
                        </button>
                    </div>
                </div>
                <div className="jumbotron-right">
                    <div className="email">
                        rafliros06@gmail.com
                    </div>
                    <div className="line ">

                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron