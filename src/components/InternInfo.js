import { useEffect, useState } from 'react';

function InternInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern') // make sure this route exists in your backend
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <p>Loading intern details...</p>;

  return (
    <div>
      <h2>👩‍💻 Intern Info</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Referral Code:</strong> {user.referralCode}</p>
      <p><strong>Total Donations:</strong> ₹{user.totalDonations}</p>
    </div>
  );
}

export default InternInfo;
