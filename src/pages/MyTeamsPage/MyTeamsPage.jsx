import React from 'react';

//retreive all teams from db

//.map() all teams across my teams page in cards


const MyTeamsPage = (props) => {
    return (
        <div className="pageTitle">
            <h1>This is the My Teams Page</h1>
        
        </div>
    )
}

export default MyTeamsPage;

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