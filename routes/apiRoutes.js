const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFile = (file, encoding, callback) => {
  fs.readFile(file, encoding, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const writeFile = (file, data, encoding, callback) => {
  fs.writeFile(file, data, encoding, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

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

module.exports = router;



