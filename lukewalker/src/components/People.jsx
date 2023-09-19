import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function People() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setData(response.data);
        setError("");
      })
      .catch((err) => {
        setData(null);
        setError("These aren't the droids you're looking for.");
      });
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h2>Name: {data.name}</h2>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>Birth Year: {data.birth_year}</p>
        </div>
      ) : (
        <div>
          <p>{error}</p>
          <img src="https://i.ytimg.com/vi/pUZo2Do2mcY/maxresdefault.jpg" alt="Obi" width="300px" />
        </div>
      )}
    </div>
  );
}

export default People;
