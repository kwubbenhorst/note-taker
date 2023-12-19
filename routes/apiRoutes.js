//Sets up a router instance from Express.
const router = express.Router();
//Imports necessary modules (fs for file system operations, uuidv4 for generating unique IDs).
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//Helper function for reading files.
const readFile = (file, encoding, callback) => {
  fs.readFile(file, encoding, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

//Helper function for writing files.
const writeFile = (file, data, encoding, callback) => {
  fs.writeFile(file, data, encoding, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

//Defines a route for viewing notes --  GET /notes
//Reads the contents of 'db.json' and sends the data as a JSON response
router.get('/notes', (req, res) => {
  readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

//Defines a route for adding notes -- POST /notes
// Handles the creation of a new note, assigns a unique ID using 'uuidv4'
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  readFile('./db/db.json', 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading file:', readErr);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const notes = JSON.parse(data);
      notes.push(newNote);

      writeFile('./db/db.json', JSON.stringify(notes), 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(newNote);
        }
      });
    }
  });
});

//Defines a route for deleting a specific note by its id -- DELETE /notes/:id. 
//In index.js the saved notes list is generated with a dataset on each note, including id.  This is captured when the associated trash can icon is clicked and can be passed in as a req.param end-point
//These methods achieve the delete functionality by first reading all the notes in the db.json file, filtering out the one that is a match to the unique id of the note chosen for deletion, and updating/rewriting the db.json file 
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;

  readFile('./db/db.json', 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading file:', readErr);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      let notes = JSON.parse(data);
      notes = notes.filter((note) => note.id !== noteId);

      writeFile('./db/db.json', JSON.stringify(notes), 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});

//Exports the router instance so that the server.js file can have access to its apiRoutes module
module.exports = router;



