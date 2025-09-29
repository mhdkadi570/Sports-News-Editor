import axios from 'axios';
import { Match } from '../models/Match';

const API_URL = 'https://api.football-data.org/v2/matches';

export class MatchService {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getMatchesForToday(): Promise<Match[]> {
        const today = new Date().toISOString().split('T')[0];
        return this.fetchMatches(today);
    }

    async getMatchesForYesterday(): Promise<Match[]> {
        const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0];
        return this.fetchMatches(yesterday);
    }

    private async fetchMatches(date: string): Promise<Match[]> {
        try {
            const response = await axios.get(`${API_URL}?dateFrom=${date}&dateTo=${date}`, {
                headers: {
                    'X-Auth-Token': this.apiKey
                }
            });
            return response.data.matches.map((match: any) => new Match(match));
        } catch (error) {
            console.error('Error fetching matches:', error);
            return [];
        }
    }
}