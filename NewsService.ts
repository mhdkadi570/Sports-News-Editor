// src/services/NewsService.ts

import { Match } from '../models/Match';
import { Player } from '../models/Player';
import { Team } from '../models/Team';

export class NewsService {
    createMatchReport(match: Match, goalScorers: Player[], team: Team): string {
        const score = `${match.score.home} - ${match.score.away}`;
        const scorers = goalScorers.map(scorer => scorer.name).join(', ');
        const report = `
            Match Report: ${match.date}
            Teams: ${team.name} vs ${match.opponent}
            Score: ${score}
            Goal Scorers: ${scorers}
            Match Details: ${match.details}
        `;
        return report;
    }

    formatNewsArticle(report: string): string {
        return `
            <article>
                <h2>Match Report</h2>
                <p>${report}</p>
            </article>
        `;
    }
}