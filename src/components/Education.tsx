// src/components/Education.tsx
import React, { useState } from 'react';
import '../styles/Education.css';

const Education: React.FC = () => {
  const [editMode, setEditMode] = useState(true);
  const [school, setSchool] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="section">
      <h2>Education</h2>
      {editMode ? (
        <form>
          <input placeholder="School Name"  value={school} onChange={(e) => setSchool(e.target.value)}  />
          <input placeholder="specification" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <button type="button" onClick={() => setEditMode(false)}>Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {school}</p>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Date:</strong> {date}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
