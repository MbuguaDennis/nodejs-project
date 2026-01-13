const { membersDetails } = require('./data.js'); // destructuring the array


const express = require('express');
const cors = require('cors');
const { fileURLToPath } = require('node:url');

const app = express();

const PORT =  5000 ||app.process.PORT 

// Middleware
app.use(express.json());
app.use(cors()); // remember parentheses!

// Routes
app.get('/', (req, res) => {
  if (!membersDetails || membersDetails.length < 1) {
    return res.status(204).send({ message: "No data to display" });
  }

  res.send(membersDetails);
});

// get members with id

// Get member by ID
app.get("/members/:id", (req, res) => {
  const memberId = parseInt(req.params.id);
  const member = membersDetails.find(m => m.memberId === memberId);
  if (!member) {
    return res.status(404).send({ message: "Member not found" });
  }

  res.send(member);
});


// post request

app.post("/", (req, res) => {
    const newData = req.body;

    if (!newData || Object.keys(newData).length === 0) {
        return res.status(400).send({ message: "No data provided" });
    }

    // Optional: check for required fields
    const requiredFields = ["memberId", "fullName", "age", "gender"];
    for (let field of requiredFields) {
        if (!newData[field]) {
            return res.status(400).send({ message: `Missing field: ${field}` });
        }
    }

    // Add new member to array
    membersDetails.push(newData);

    res.status(201).send({
        message: "New member added successfully",
        member: newData
    });
});





app.put('/members/:id', (req, res) => {
    const newData = req.body;
    const memberId = parseInt(req.params.id);

    const member = membersDetails.find(m => m.memberId === memberId);

    if (!member) {
        return res.status(404).send({ message: "Member Not Found" });
    }

    // Update fields (only if provided in newData)
    member.memberId = newData.memberId ?? member.memberId;
    member.fullName = newData.fullName ?? member.fullName;
    member.age = newData.age ?? member.age;
    member.gender = newData.gender ?? member.gender;
    member.contact = newData.contact ?? member.contact;
    member.membership = newData.membership ?? member.membership;
    member.attendance = newData.attendance ?? member.attendance;
    member.roles = newData.roles ?? member.roles;
    member.notes = newData.notes ?? member.notes;

    res.send({
        message: "Member updated successfully",
        member
    });
});



//delete

app.delete('/members/:id', (req, res) => {
    const memberId = parseInt(req.params.id);

    const index = membersDetails.findIndex(m => m.memberId === memberId);

    if (index === -1) {
        return res.status(404).send({ message: "Member not found" });
    }

    // Remove member from array
    const removedMember = membersDetails.splice(index, 1); // returns array of removed item

    res.send({
        message: "Member deleted successfully",
        removedMember: removedMember[0],
        remainingMembers: membersDetails
    });
});













// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
