import React, {Component} from 'react';
import './MyTeams.css'
import * as teamsAPI from '../../utils/team-search-api';


class MyTeamsPage extends Component{
    state = {
        teams: [{teams : []}],
    }

  
   async componentDidMount(){
    await teamsAPI.getAll().then(results => {
        this.setState({teams : results})
        });
    }

    
    render(){

        if(this.state.teams[0].teams.length > 0){
            
            return(
                <div className="card-container">
                {this.state.teams[0].teams.map(team => (
                    <div class="card card-size" >
                    <img src={team.logo} class="card-img-top" alt="team logo"/>
                    <div class="card-body">
                        <h5 class="card-title">{team.name}</h5>
                        <p class="card-text">Founded: {team.founded}</p>
                    </div>
                        <a href="#" class="btn btn-primary">Delete Team</a>
                    </div>
                ))}
                </div>
            ) 
        }else {

            return(
                <div>
                    <div>
                         <h1>loading</h1>
                    </div>
                </div>
            )
      
        }
    
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