const express = require('express');
const cors = require('cors');
const profileController = require('./controllers/profileController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-github-pages-url.github.io', 'https://your-railway-app.railway.app'],
  credentials: true
}));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', profileController);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'VMD Portfolio Server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Profile API: http://localhost:${PORT}/api/profile`);
}); 