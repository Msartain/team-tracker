import React, {Component} from 'react';
import * as teamsAPI from '../../utils/team-search-api';

//retreive all teams from db

//.map() all teams across my teams page in cards

class MyTeamsPage extends Component{
    state = {
        teams: []
    }


   async componentDidMount(){
    await teamsAPI.getAll().then(results => {
        this.setState({teams : results})
        });
    }


    render(){
        return(
            <div>
                <div className="pageTitle">
                     <h1>This is the My Teams Page</h1>
                </div>
            </div>
        )
    }
}


export default MyTeamsPage;

// const MyTeamsPage = (props) => {
//     return (
        
//     )
// }

// export default MyTeamsPage;

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