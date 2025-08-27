// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Data stored in an array
let items = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' }
];

// GET all items
app.get('/items', (req, res) => {
    res.json(items);
});

// GET single item by id
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// POST new item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT update item by id
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (item) {
        item.name = req.body.name || item.name;
        item.description = req.body.description || item.description;
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE item by id
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
        const deletedItem = items.splice(index, 1);
        res.json(deletedItem[0]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
