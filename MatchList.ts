import React from 'react';
import MatchCard from './MatchCard';
import { Match } from '../models/Match';
import { getMatchesForTodayAndYesterday } from '../services/MatchService';

const MatchList: React.FC = () => {
    const [matches, setMatches] = React.useState<Match[]>([]);

    React.useEffect(() => {
        const fetchMatches = async () => {
            const fetchedMatches = await getMatchesForTodayAndYesterday();
            setMatches(fetchedMatches);
        };

        fetchMatches();
    }, []);

    return (
        <div>
            <h2>Match List</h2>
            <ul>
                {matches.map(match => (
                    <li key={match.id}>
                        <MatchCard match={match} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchList;