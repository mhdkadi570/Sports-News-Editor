// src/models/Player.ts

export class Player {
    name: string;
    goalsScored: number;
    cardsReceived: number;

    constructor(name: string, goalsScored: number = 0, cardsReceived: number = 0) {
        this.name = name;
        this.goalsScored = goalsScored;
        this.cardsReceived = cardsReceived;
    }
}