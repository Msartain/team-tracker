const User = require('../models/user');

module.exports = {
    add,
    index,
    delete: deleteTeam
}


function deleteTeam(req, res){
    const userId = req.body.userId
    const teamId = req.body.teamId
    User.findById(userId).then(user => {
        const team = user.teams.id(teamId)
        user.teams.remove(team)
        user.save(()=>{
          res.status(201).json(req.body.teamId)
        })
      })
    }


async function index(req, res){
    const user = await User.findById(req.body._id);
    res.status(201).json(user.teams)
}


async function add(req, res){
    let user = await User.findOne({email: req.body.user})
    console.log(user)
    user.teams.push(req.body);
    user.save(function(err){
        console.log(user)
        res.status(201).json('added to db');
    });
}
