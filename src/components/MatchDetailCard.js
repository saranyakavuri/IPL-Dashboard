import {React} from 'react';
import {Link} from 'react-router-dom';

import './MatchDetailCard.scss'

export const MatchDetailCard = ({teamName, match})=>
{
      if(!match) return null;

    const otherTeam = match.team1 === {teamName} ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;

    const isMatchWon = teamName === match.matchWinner;


    return(
    <div className =  {isMatchWon? 'MatchDetailCard won-card' : 'MatchDetailCard loss-card'}>
        <div>
         <h3>MatchDetails</h3>
         <span className ="vs">vs</span> 
         <h3><Link to ={otherTeamRoute}> {otherTeam}</Link> </h3>
         <h2 className ="match-date"> {match.date}</h2>
         <h2 className ="match-venue">{match.venue}</h2>
         <h2 className ="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h2>
        </div>

    <div className ="additional-detail">
        <h3>First Innings</h3>
        <p>{match.team1}</p>

        <h3>Second Innings</h3>
        <p>{match.team2}</p>

        <h3>Man of match</h3>
        <p>{match.playerOfMatch}</p>
  
        <h3>Umpires</h3>
        <p>{match.umpire1} , {match.umpire2}</p>
        
    </div>
    </div>
   );
}