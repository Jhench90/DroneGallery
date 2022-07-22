import React from 'react';
import axios from 'axios';

class Leagues extends React.Component {
  constructor(props){
    super(props);
    this.state={
      teams: [
        // {name: 'Tottenham Hotspur F.C.', schedule:[]},
        // {name: 'Chelsea F.C.', schedule:[]},
        // {name: 'San Jose Earthquakes', schedule:[]},
        {name: 'Golden State Warriors', schedule:[]},
        {name: 'New Orleans Pelicans', schedule:[]}
      ]
    }
  };
  addTeam=(team)=>{
    console.log('Adding new team')
    var teams = this.state.teams
    teams.push({name: `${team}`})
    this.setState({teams: teams})
  }
  componentDidMount(){
    axios.get('/nba/schedule')
      .then((response)=>{
        // console.log(response)
        // console.log(response.data[0].doc.games[0])
        var warriorsschedule = [];
        var pelicansschedule = [];
        var teamsCopy = this.state.teams
        response.data[0].doc.games.forEach((game)=>{
          if (game.away.name == 'Golden State Warriors' || game.home.name == 'Golden State Warriors') {
            warriorsschedule.push(game)
          }
          if (game.away.name == 'New Orleans Pelicans' || game.home.name == 'New Orleans Pelicans') {
            pelicansschedule.push(game)
          }
        })
        teamsCopy.forEach((team)=>{
          if (team.name == 'Golden State Warriors') {
            team.schedule = warriorsschedule
          }
          if (team.name == 'New Orleans Pelicans') {
            team.schedule = pelicansschedule
          }
        })
        this.setState({teams: teamsCopy})
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  render () {
    var key=0
    return (
      <div className="leaguecontainer">
        <div className="addteamcontainer">
          <input onChange={(e)=>{this.setState({newteam: e.target.value})}}type="text" placeholder="Follow More Teams"></input>
          <button onClick={(e)=>{this.addTeam(this.state.newteam)}}>Enter</button>
        </div>
        <div> </div>
        <div className="teamlist">
          <ul>
          {this.state.teams.map((team)=>{
              var endofarr = team.schedule.length-1
              var latestgame = team.schedule[endofarr]
              console.log(latestgame)
              if (latestgame !== undefined) {
                return (
                  <li key={key++}>
                    <div>{team.name}
                    <div>
                      Latest Game:
                      <div>
                        {team.name} vs {(team.name == latestgame.away.name) ? `${latestgame.home.name}` : `${latestgame.away.name}`}
                      </div>
                      <div>
                      {(team.name == latestgame.away.name) ? `${latestgame.away_points} ${latestgame.home_points}` : `${latestgame.home_points} ${latestgame.away_points}`}
                      </div>
                    </div>
                    <div>
                      Next Game:
                    </div>
                    <div>
                      <button onClick={(e)=>{}}>Upcoming schedule</button>
                      <button onClick={(e)=>{}}>Previous Games</button>
                    </div>


                    </div>
                  </li>
                )

              }
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Leagues;