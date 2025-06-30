//second file: Student.js
// Import express and filesystem modules
import express from "express";
import { readFile } from "fs/promises"; //  you get an async function to read files.

// Create an object of express
// This object will be used to create the server and define routes
const app = express();

// Define the port
const PORT = 3000;

// Define a GET route to return JSON data with the params req and res
app.get("/Student", async (req, res) => {
  try {
    // Read the JSON file contents
    const data = await readFile("./data/Student.json", "utf-8");

    // Parse the JSON data into a JavaScript object
    const student = JSON.parse(data);

    //res.json() converts it to clean JSON text with correct headers.
    res.json(student);
  } catch (error) {
    // Handle errors (e.g., file not found)
    res.status(500).json({ error: "Failed to load data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
