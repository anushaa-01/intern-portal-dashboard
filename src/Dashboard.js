import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then(res => res.json())
      .then(data => setIntern(data));
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h2>🎓 Intern Dashboard</h2>
      {intern ? (
        <>
          <p><b>Name:</b> {intern.name}</p>
          <p><b>Referral Code:</b> {intern.referralCode}</p>
          <p><b>Total Donations:</b> ₹{intern.totalDonations}</p>
          <h3>🏆 Rewards & Unlockables</h3>
          <ul>
            <li>🎖️ Bronze Badge - ₹1000</li>
            <li>🥈 Silver Badge - ₹3000</li>
            <li>🥇 Gold Badge - ₹5000</li>
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;