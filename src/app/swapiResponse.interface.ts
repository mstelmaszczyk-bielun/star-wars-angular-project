import { Character } from './character.interface';

export interface SwapiResponse {
    count: number;
    next: string;
    prev: string;
    results: Array<Character>;
}