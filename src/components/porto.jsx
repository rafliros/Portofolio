import './porto'; // penting: harus ada file porto.css di folder yang sama
import React from 'react';
function Porto() {
  return (
    <div className="porto">
      <div className="title">
        <h1>03. Portofolio</h1>
        <div className="line"></div>
      </div>

      <div className="porto-inline">
        <div className="image"></div>
        <div className="description">
          <div className="text">
            <h2>Project Name</h2>
            <p>Deskripsi singkat tentang proyek yang kamu buat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porto; 
