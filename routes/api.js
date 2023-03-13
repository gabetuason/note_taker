// Importing required dependencies and helper functions
  // From excersize: 11-express 02-Day-Activities 17-ins_POST-Fetch
const notes = require("express").Router();
const path = require("path");
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// Handling GET requests to retrieve all notes
notes.get("/notes", (req, res) => {
  console.info(`\n${req.method} request received for notes\n`);
  readFromFile(path.join(__dirname,"../db/db.json")).then((data) => {
    // Parsing JSON data and sending it as response
    res.json(JSON.parse(data));
  }); 
});

// Handling POST requests to add new notes
notes.post("/notes", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  // Extracting title and text from the request body
  const { title, text } = req.body;

  // Validating the presence of required fields
  if (title && text) {
    const noteData = {
      title,
      text,
      id: uuid(), // Generating a unique ID for the new note
    };

    // Appending the new note to the database
    readAndAppend(noteData, path.join(__dirname,"../db/db.json")); 

    // Sending success response
    res.json(`Note has been created`); 
  } else {
    // Sending error response if required fields are missing
    res.status(400).json({ error: "ERROR: Missing text" });
  }
});

// Handling DELETE requests to remove a note by ID
notes.delete("/notes/:id", (req, res) => {
  console.info(`${req.method} request received for removing a note`);

  if (req.params.id) {
    // Reading the current database
    readFromFile(path.join(__dirname,"../db/db.json")).then((data) => {
      const noteData = JSON.parse(data);

      // finding the note to be deleted
      const removeNote = noteData.find((note) => note.id === req.params.id);

      if (!removeNote) {
        // Sending error 404 response if the note is not found
        res.status(404).json({ message: "Note Not found" });
        return;
      }

      console.log(removeNote);

      // Removing the note from the database index
      const noteDeleted = noteData.indexOf(removeNote);
      noteData.splice(noteDeleted, 1);

      // Writing the updated database to file
      writeToFile(path.join(__dirname,"../db/db.json"), noteData);

      // sending success response
      res.json({
        message: `The note has been successfully removed`,
        removed: removeNote,
      });
    });
  } else {
    // Sending error response if ID parameter is missing
    res.status(400).json({ error: "ERROR: Issues in deletion" });
  }
});

// Exporting the notes router
module.exports = notes;
