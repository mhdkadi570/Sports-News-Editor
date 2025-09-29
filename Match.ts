class Match {
    date: Date;
    teams: string[];
    score: string;
    events: string[];

    constructor(date: Date, teams: string[], score: string, events: string[]) {
        this.date = date;
        this.teams = teams;
        this.score = score;
        this.events = events;
    }
}