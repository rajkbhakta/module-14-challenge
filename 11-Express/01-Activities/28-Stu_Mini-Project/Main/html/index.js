const express = require('express');
const path = require('path');

const app = express();

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.resolve('public', 'index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.resolve('public', 'pages/feedback.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname.replace('html', ''), 'public/pages/404.html'))
);

module.exports = app;