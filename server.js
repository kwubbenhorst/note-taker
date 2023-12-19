//Imports the necessary modules (express, apiRoutes, htmlRoutes).
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Creates an instance of the Express application.
//Sets the PORT to either the environment variable or default to 3001.
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Middleware to serve up static files from the public directory
app.use(express.static('public'));

// Middleware to use modular routes for API (/api) and HTML(/) end-points
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
