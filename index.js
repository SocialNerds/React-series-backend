const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const app = express();

app.use(bodyParser.json());

var todos = [];

app.get('/', (req, res) => {
    res.send(todos)
});

app.post('/', (req, res) => {
    todo = {
        id: uuidv4(),
        title: req.body.title,
        done: req.body.done
    };

    todos.push(todo);

    res.send(todo);
});

app.patch('/', (req, res) => {
    let todo = todos.filter(todo => todo.id === req.body.id);
    todo[0].done = !todo[0].done;
    res.send(todo[0]);
});

app.delete('/', (req, res) => {
    todos = todos.filter(todo => todo.id !== req.body.id);
    res.send(todos)
});

app.get('/clear', (req, res) => {
    todos = todos.filter(todo => !todo.done);
    res.send(todos)
});

app.listen(3000, function () {
    console.log('React series backend listening on port 3000!')
});
