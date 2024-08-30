const express = require('express');
const axios = require('axios'); // Import axios
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Axios instance for making HTTP requests
const api = axios.create({
  baseURL: 'https://your-backend-server.com/api',
});

// Sample route using axios
app.get('/external-data', async (req, res) => {
  try {
    const response = await api.get('/data'); // Make a GET request to an external API
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
