
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const navigate = useNavigate();
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');

  const handleResourceChange = (e) => {
    setResource(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${resource}/${id}`);
  };

  return (
    <div>
      <h2>Search for:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <select value={resource} onChange={handleResourceChange}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>

          </select>
        </label>
        <label>
          ID:
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}   

export default DropdownMenu;
