import React, { useState } from 'react';

const ScoreEditor = ({ match, onSave }) => {
    const [score, setScore] = useState(match.score || '');
    const [goalScorers, setGoalScorers] = useState(match.goalScorers || '');
    const [details, setDetails] = useState(match.details || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...match, score, goalScorers: goalScorers.split(','), details });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Score:</label>
                <input
                    type="text"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
            </div>
            <div>
                <label>Goal Scorers (comma separated):</label>
                <input
                    type="text"
                    value={goalScorers}
                    onChange={(e) => setGoalScorers(e.target.value)}
                />
            </div>
            <div>
                <label>Match Details:</label>
                <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ScoreEditor;