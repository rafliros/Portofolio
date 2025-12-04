import './porto';
import React from 'react';

function Porto() {
    return (
        <div className="porto">

            {/* ===== TITLE ===== */}
            <div className="title">
                <h1>03. Portofolio</h1>
                <div className="line"></div>
            </div>

            {/* ===== PORTO CONTENT WRAPPER ===== */}
            <div className="porto-content">

                {/* ===== BodyWise ===== */}
                <div className="porto-item">
                    <h3>Bodywise</h3>
                    <div className="year">2025 • Ketua Tim</div>
                    <p>
                        Bertanggung jawab dalam pengembangan halaman Home aplikasi serta
                        pembuatan konsep awal fitur-fitur utama Bodywise.
                    </p>
                </div>

                {/* ===== Serenity ===== */}
                <div className="porto-item">
                    <h3>Serenity</h3>
                    <div className="year">2024 • Anggota Tim</div>
                    <p>
                        Bertugas mengembangkan struktur database dan ikut membuat
                        konsep awal aplikasi kesehatan mental "Serenity".
                    </p>
                </div>

                {/* ===== OkLaundry ===== */}
                <div className="porto-item">
                    <h3>OkLaundry</h3>
                    <div className="year">2024 • Ketua Tim & Frontend Developer</div>
                    <p>
                        Mengembangkan UI/UX aplikasi, mengatur alur tampilan, serta
                        membuat konsep awal sistem manajemen laundry.
                    </p>
                </div>

                {/* ===== Object Detection App ===== */}
                <div className="porto-item">
                    <h3>Object Detection App</h3>
                    <div className="year">2024</div>
                    <p>
                        Mengembangkan aplikasi pendeteksi objek menggunakan kamera
                        secara real-time berbasis machine learning / computer vision.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Porto;
