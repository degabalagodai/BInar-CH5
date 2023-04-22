const express = require('express');
const { getUsers } = require('./helper');

const server = express();

server.use('/static', express.static('public/static'))

server.get('/', function(req, res) {
    res.sendFile(`public/index.html`, {root: __dirname });
});

server.get('/game', function(req, res) {
    res.sendFile(`public/game.html`, {root: __dirname });
});

server.get('/api/v1/accounts', function(req, res) {
    const users = getUsers();

    const result = users.map(function(user) {
        return {
            username: user.username,
        }
    });

    res.json(result);
});

server.post('/api/v1/accounts/login', function(req, res) {
    const { username, passwordn} = req.body;

    const users = getUsers();

    const found = user.find(function(user) {
        return user.username === username;
    })

    if (found) {
        const passwordMatch = found.password === password;

        if (passwordMatch) {
            req.status(400);
            res.json({
                error: 'user or password not found'
            });
        } else {
            res.json({
                id: found.id
            });
        }
    } else {
        req.status(400)
        res.json({
            error: 'user or password not found'
        });
    }

});

server.listen(4000);