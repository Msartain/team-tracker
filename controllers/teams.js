const User = require('../models/user');

module.exports = {
    add,
    index,
    delete: deleteTeam
}


function deleteTeam(req, res){
    console.log('delete controller hit')
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
    console.log('index controller hit')
    const user = await User.find({});
    res.status(201).json(user)
}

async function add(req, res){
    console.log('add controller hit')
    let user = await User.findOne({email: req.body.user})
    console.log(user)
    user.teams.push(req.body);
    user.save(function(err){
        console.log(user)
        res.status(201).json('added to db');
    });
}

//delete

//show

// function homePage(req, res){
//     User.find({}, function(err, users){
//         if (err) return;
//         res.render('loggedIn/home',{
//             users,
//             user: req.user,
//         })
//     } ) 
// }

// function show(req, res){
//     User.findOne({'posts._id': req.params.postId}).then(function(user) {
//         let post = user.posts.id(req.params.postId);
//         res.render('loggedIn/show', {post: post, user: req.user})
//     })
// }