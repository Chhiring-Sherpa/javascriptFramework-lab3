//1st file: index.js
// Import express module
import express from "express";
// Create the app
const app = express();

// Define the port
const PORT = 3000;

// 4. Create a GET route for the home page "/"
app.get("/", (req, res) => {
    // Send HTML displaying Title Page with group names
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Group Names</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
        }
          h1 {
            color: #333;
            margin-bottom: 20px;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            background: #fff;
            margin: 5px auto;
            padding: 10px;
            width: auto;
            border: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <h1>Tittle Page</h1>
        <ul>
          <li><strong>Lab 3</strong></li>
          <li>Rohan Rijal, Puja Bhujel, Chhiring Sherpa</li>
          <li>Georgian Colllege at Ilac</li>
          <li>COMP2068-Javascript Framework</li>
          <li>Anmar Jarjees</li>
          <li>2025-06-29</li>
        </ul>
      </body>
    </html>
  `);
});
 
//  Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
