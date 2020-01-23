import React, {Component} from 'react';
import './MyTeams.css'
import * as teamsAPI from '../../utils/team-search-api';


class MyTeamsPage extends Component{
    state = {
        teams: [{teams : []}],
    }

  
    async componentDidMount(){
        const teams = await teamsAPI.getAll()
            this.setState({ teams })
        }


    
    handleDelTeam = async (id, user) => {
        const options ={ 
            method: 'POST',
            headers: {
                "content-type" : "application/json" 
            },
            body: JSON.stringify({teamId: id, userId: user})
        }
        await teamsAPI.deleteTeam(options);
        const teams = await teamsAPI.getAll()
        this.setState({ teams })
        // this.setState(state => ({
        //     teams: {teams : state.teams[0].teams.filter(team => team._id !== id)}
        // }));

        // })).then(result => {
        //     const newState = this.state.teams.filter(
        //         (el, id) => id !== result)
        //         this.setState({teams: newState},() => this.props.history.push('/myteams'))
        // })
      }

     
    //  componentDidUpdate(prevProps, prevState) {
    //     if (prevState.teams !== this.state.teams) {
    //          teamsAPI.getAll()
    //          console.log('state has changed.')
    //         }
    //     }
        

    render(){

        if(this.state.teams[0].teams){
            
            return(
                <div className="teams-container">
                <div className="card-container">
                {this.state.teams[0].teams.map(team => (
                    <div class="card card-size" >
                    <img src={team.logo} class="card-img-top" alt="team logo"/>
                    <div class="card-body">
                        <h5 class="card-title">{team.name}</h5>
                        <p class="card-text">Founded: {team.founded}</p>
                        <p class="card-text">country: {team.country}</p>
                        <p class="card-text">venue name: {team.venue_name}</p>
                        <p class="card-text">venue capacity: {team.venue_capacity}</p>
                    </div>
                        <button onClick={ () => this.handleDelTeam(team._id, this.state.teams[0]._id)} class="btn btn-primary">Delete Team </button>
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