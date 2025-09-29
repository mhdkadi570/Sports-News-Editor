import React from 'react';
import { Match } from '../models/Match';

interface MatchDetailsProps {
    match: Match;
}

const MatchDetails: React.FC<MatchDetailsProps> = ({ match }) => {
    return (
        <div className="match-details">
            <h2>{match.league} - Round {match.round}</h2>
            <h3>{match.homeTeam.name} vs {match.awayTeam.name}</h3>
            <p>Score: {match.score.home} - {match.score.away}</p>
            <h4>Goal Scorers:</h4>
            <ul>
                {match.events.map((event, index) => (
                    <li key={index}>{event.player.name} - {event.type} at {event.minute}'</li>
                ))}
            </ul>
            <p>Date: {new Date(match.date).toLocaleDateString()}</p>
        </div>
    );
};

export default MatchDetails;