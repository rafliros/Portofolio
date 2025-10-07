import { useState } from 'react';

function Worked() {
  const [data] = useState([
    { year: '2016-2019', company: 'SMP' },
    { year: '2019-2021', company: 'SMA' },
    { year: '2023-Sekarang', company: 'Bina Nusantara University' }
  ]);

  const [idxSelected, setIdxSelected] = useState(0);

  const onChange = (idx) => {
    setIdxSelected(idx);
  };

  return (
    <div className="worked">
      <div className="title">
        <h1>02. Pendidikan</h1>
        <div className="line"></div>
      </div>

      {/* PEMBUNGKUS GRID WAJIB ADA */}
      <div className="content">
        {/* Kolom kiri */}
        <div className="sidebar">
          {data.map((value, index) => (
            <div
              key={index}
              onClick={() => onChange(index)}
              className={idxSelected === index ? 'active' : ''}
            >
              {value.year}
            </div>
          ))}
        </div>

        {/* Kolom kanan */}
        <div className="description">
          <p className="title">{data[idxSelected].company}</p>
          <p className="desc">{data[idxSelected].year}</p>
        </div>
      </div>
    </div>
  );
}

export default Worked;
