import './porto';
import React from 'react';
function Porto() {
    return (
        <div className="porto">
            <div className="title">
                <h1>03. Portofolio</h1>
                <div className="line"></div>
            </div>

            <div className="porto-inline">
                <div className="image" style={{ backgroundImage: "url('/images/laundry-app.png')" }}></div>
                <div className="description">
                    <div className="text">
                        <h2>Laundry Management App</h2>
                        <p>Aplikasi berbasis PHP dan MySQL untuk mengelola transaksi, layanan, dan pembayaran menggunakan Midtrans Snap.</p>
                    </div>
                </div>
            </div>

            <div className="porto-inline">
                <div className="image"></div>
                <div className="description">
                    <div className="text">
                        <h2>Serenity</h2>
                        <p>Aplikasi untuk memahami kondisi mental seseorang.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Porto; 
