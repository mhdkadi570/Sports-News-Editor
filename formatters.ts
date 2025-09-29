// src/utils/formatters.ts

export function formatMatchDetails(match) {
    return `${match.teamA} vs ${match.teamB} - Score: ${match.score}`;
}

export function formatNewsArticle(match, goalScorers) {
    const details = formatMatchDetails(match);
    const scorers = goalScorers.join(', ');
    return `${details}\nGoal Scorers: ${scorers}`;
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}