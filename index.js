const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Todo DB.
var todos = [
    {
        id: uuidv4(),
        title: 'Buy milk',
        done: false
    },
    {
        id: uuidv4(),
        title: 'Record react series',
        done: false
    },
    {
        id: uuidv4(),
        title: 'Like SocialNerds on YouTube',
        done: true
    },
];

// Get all todos.
app.get('/', (req, res) => {
    res.send(todos)
});

// Create todo.
app.post('/', (req, res) => {
    todo = {
        id: uuidv4(),
        title: req.body.title,
        done: false
    };

    todos.push(todo);

    res.send(todo);
});

// Mark todo as done
app.patch('/:id', (req, res) => {
    let todo = todos.filter(todo => todo.id === req.params.id);
    todo[0].done = !todo[0].done;
    res.send(todo[0]);
});

// Delete a todo
app.delete('/:id', (req, res) => {
    todos = todos.filter(todo => todo.id !== req.params.id);
    res.send(true)
});

// Clear all completed todos.
app.get('/clear', (req, res) => {
    todos = todos.filter(todo => !todo.done);
    res.send(todos)
});

// Start server.
app.listen(3000, function () {
    console.log('React series backend listening on port 3000!')
});
