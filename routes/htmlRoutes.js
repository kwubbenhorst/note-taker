//Sets up a router instance from Express. Imports necessary modules (path for working with file paths).
const express = require('express');
const path = require('path');
const router = express.Router();

//Defines two routes: GET /notes and GET * (catch-all route).  Responses are in terms of the respective HTML files
router.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html')); //Sends the 'notes.html' file in response to a request to '/notes'
});
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));  // Sends the 'index.html' file for any other routes
});

//Exports the router instance so that the server.js file can have access to its htmlRoutes module
module.exports = router;