import React from 'react';

interface MatchCardProps {
    teamA: string;
    teamB: string;
    scoreA: number;
    scoreB: number;
    onEdit: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ teamA, teamB, scoreA, scoreB, onEdit }) => {
    return (
        <div className="match-card">
            <h3>{teamA} vs {teamB}</h3>
            <p>Score: {scoreA} - {scoreB}</p>
            <button onClick={onEdit}>Edit News</button>
        </div>
    );
};

export default MatchCard;