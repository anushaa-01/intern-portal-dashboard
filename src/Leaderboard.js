import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h2>🏅 Leaderboard</h2>
      <ol>
        {data.map((user, index) => (
          <li key={index}>{user.name} - ₹{user.donations}</li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;