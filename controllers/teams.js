const User = require('../models/user');

module.exports = {
    add
}

function add(req, res){
    console.log('controller hit')
    console.log(req.body)
    req.user.teams.push(req.body);
    req.user.save(function(err){
        res.status(201).json('added to db');
    });
}