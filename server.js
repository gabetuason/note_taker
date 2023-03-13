// Import the required modules
const express = require('express');
const apiRoutes = require('./routes/api.js');
const path = require('path');
// Make instance of the express app
const app = express();

// Define the port to use
const PORT = process.env.PORT || 3001; // Use the environment variable PORT or port 3001 if not set

// Handle JSON requests and static file requests
app.use(express.json()); // Middleware to handle JSON request bodies
app.use(express.static(path.join(__dirname, "public"))); // Middleware to serve static files from the 'public' directory

app.use('/api', apiRoutes); // Use API routes

// Route for serving the notes.html file
app.get("/notes", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Catch route for serving the index.html file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);
// Start listening on the specified port and log port for easy access
app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT} 🚀`)
);