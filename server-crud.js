
import express from "express"
import bodyParser from "body-parser"

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Sample in-memory database
let resources = [
 { id: 1, name: 'Resource 1' },
 { id: 2, name: 'Resource 2' },
];

// CRUD Operations

// Read all resources http://localhost:3000/api/resources
app.get('/api/resources', (req, res) => {
 res.json(resources);
});

// Read a specific resource by ID http://localhost:3000/api/resources/:id
app.get('/api/resources/:id', (req, res) => {
 const resourceId = parseInt(req.params.id);
 const resource = resources.find((r) => r.id === resourceId);

 if (resource) {
 res.json(resource);
 } else {
 res.status(404).json({ error: 'Resource not found' });
 }
});

// Create a new resource http://localhost:3000/api/resources
app.post('/api/resources', (req, res) => {
 const newResource = req.body;
 resources.push(newResource);
 res.status(201).json(newResource);
});

// Update a resource by ID http://localhost:3000/api/resources/:id
app.put('/api/resources/:id', (req, res) => {
 const resourceId = parseInt(req.params.id);
 const updatedResource = req.body;

 resources = resources.map((r) =>
 r.id === resourceId ? { ...r, ...updatedResource } : r
 );

 res.json({ message: 'Resource updated successfully' });
});

// Delete a resource by ID http://localhost:3000/api/resources/:id
app.delete('/api/resources/:id', (req, res) => {
 const resourceId = parseInt(req.params.id);
 resources = resources.filter((r) => r.id !== resourceId);
 res.json({ message: 'Resource deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});