import { Contributor } from "./Contributor";

export class Task{
    //atribute logika itd
    //kod modela samo atributi, bez logike,
    id: number;
    title: string;
    description: string;
    assignee: Contributor; // Naziv osobe koja je preuzela da radi na task-u.
}