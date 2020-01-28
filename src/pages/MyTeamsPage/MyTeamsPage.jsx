import React, {Component} from 'react';
import './MyTeams.css'
import * as teamsAPI from '../../utils/team-search-api';



class MyTeamsPage extends Component{
    state = {
        teams: [],
    }

  
    async componentDidMount(){
        const options = {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(this.props.user)
        }
      
        const teams = await teamsAPI.getAll(options)
        this.setState({ teams })
        }


    
    handleDelTeam = async (id, user) => {
        console.log('1 del team handle clicked - ' + id + ' ' + user)
        const options ={ 
            method: 'POST',
            headers: {
                "content-type" : "application/json" 
            },
            body: JSON.stringify({teamId: id, userId: user})
        }
        await teamsAPI.deleteTeam(options);
        // const teams = await teamsAPI.getAll(options)
        // this.setState({ teams })
        const newState = this.state.teams.filter(team => team._id !== id)
        this.setState({ teams: newState})
      }

     
    //  componentDidUpdate(prevProps, prevState) {
    //     if (prevState.teams !== this.state.teams) {
    //          teamsAPI.getAll()
    //          console.log('state has changed.')
    //         }
    //     }
        

    render(){

        if(this.state.teams){
            
            return(
                <div className="teams-container">
                <div className="card-container">
                {this.state.teams.map(team => (
                    <div class="card card-size" >
                    <img src={team.logo} class="card-img-top" alt="team logo"/>
                    <div class="card-body">
                        <h5 class="card-title">{team.name}</h5>
                        <p class="card-text">Founded: {team.founded}</p>
                        <p class="card-text">country: {team.country}</p>
                        <p class="card-text">venue name: {team.venue_name}</p>
                        <p class="card-text">venue capacity: {team.venue_capacity}</p>
                    </div>
                        <button onClick={ () => this.handleDelTeam(team._id, this.props.user._id)} class="btn btn-primary">Delete Team </button>
                    </div>
                ))}
                </div>
                </div>
            ) 
        }else {

            return(
                <div className="container">
                         <h1>loading...</h1>
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