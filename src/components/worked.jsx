import { useState } from 'react';

function Worked() {
  const [data] = useState([
    {
      year: '2023-Sekarang',
      institution: 'Bina Nusantara University',
      degree: 'Computer Science',
      description: [
        'Jurusan Computer Science dengan fokus pada pengembangan web dan mobile.',
        'Mengerjakan berbagai proyek pengembangan software dengan teknologi modern.'
      ]
    },
    {
      year: '2019-2021',
      institution: 'Daarut Tauhiid Boarding school putra SMA',
      degree: 'MIPA',
      description: [
        'Fokus pada mata pelajaran Matematika dan Ilmu Pengetahuan Alam.',
        'Mulai mempelajari dasar-dasar pemrograman.'
        
      ]
    },
    {
      year: '2016-2019',
      institution: 'Daarut Tauhiid Boarding school putra SMP',
      degree: 'SMP',
      description: [
        'Fokus pada mata pelajaran Matematika dan Ilmu Pengetahuan Alam.'
        
      ]
    }
  ]);

  const [idxSelected, setIdxSelected] = useState(0);

  const onChange = (idx) => {
    setIdxSelected(idx);
  };

  return (
    <section className="worked">
      <div className="title">
        <h1>02. Pendidikan</h1>
        <div className="line"></div>
      </div>

      <div className="content">
        <div className="sidebar">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => onChange(index)}
              className={`tab-button ${idxSelected === index ? 'active' : ''}`}
            >
              {item.institution.split(' ').slice(-1)[0]}
            </button>
          ))}
        </div>

        <div className="description">
          <h3 className="role">
            {data[idxSelected].degree}{' '}
            <span className="highlight">@ {data[idxSelected].institution}</span>
          </h3>
          <p className="duration">{data[idxSelected].year}</p>
          <ul className="responsibility-list">
            {data[idxSelected].description.map((item, index) => (
              <li key={index}>
                <span className="arrow">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Worked;
