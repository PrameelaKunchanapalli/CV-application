// src/components/Experience.tsx
import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const [editMode, setEditMode] = useState(true);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="section">
      <h2>Experience</h2>
      {editMode ? (
        <form>
          <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} />
          <input placeholder="Position Title" value={position} onChange={(e) => setPosition(e.target.value)} />
          <textarea placeholder="Responsibilities" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
          <button type="button" onClick={() => setEditMode(false)}>Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Position:</strong> {position}</p>
          <p><strong>Responsibilities:</strong> {responsibilities}</p>
          <p><strong>From:</strong> {dateFrom}</p>
          <p><strong>To:</strong> {dateTo}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
