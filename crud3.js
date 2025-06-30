//3rd file: crud.js

import express from "express";
const app = express();//creating an instance of express
const PORT = 3000;

 // Register middleware with the app
// Built-in function to parse JSON body data
app.use(express.json());

// Sample users array
let members = [
  { id: 1, name: "Chhiring" },
  { id: 2, name: "Rohan" },
  { id: 3, name: "Puja" },
  
];

// GET all users
app.get("/members", (req, res) => {
  res.json(members);
});

// POST a new user
app.post("/members", (req, res) => {
  const newMember = { //id = members length + 1 and name 
    id: members.length + 1,
    name: req.body.name
  };
  members.push(newMember); //adding new member to the members array
  res.status(201).json(newMember);
});

// PUT update user
app.put("/members/:id", (req, res) => {
  const memberId = parseInt(req.params.id);
  const member = members.find(m => m.id === memberId);
  if (!member) {
    return res.status(404).json({ error: "Member not found" });
  }
  member.name = req.body.name;
  res.json(member);
});

// DELETE a user
app.delete("/members/:id", (req, res) => {
  const memberId = parseInt(req.params.id);
  members = members.filter(m => m.id !== memberId);
  res.json({ message: "Member deleted successfully" });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
