const User = require('../models/user');

module.exports = {
    add
}

async function add(req, res){
    console.log('controller hit')
    let user = await User.findOne({email: req.body.user})
    console.log(user)
    user.teams.push(req.body);
    user.save(function(err){
        console.log(user)
        res.status(201).json('added to db');
    });
}