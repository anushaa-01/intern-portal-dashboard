const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: 'Anusha Doppalapudi',
    referralCode: 'anusha2025',
    totalDonations: 5000
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Anusha', donations: 5000 },
    { name: 'Ravi', donations: 3000 },
    { name: 'Meena', donations: 1000 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});