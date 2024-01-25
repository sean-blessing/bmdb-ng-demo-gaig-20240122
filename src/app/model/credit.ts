import { Actor } from "./actor";
import { Movie } from "./movie";

export class Credit {

    constructor(public id: number = 0, 
                public actor: Actor = new Actor(),
                public movie: Movie = new Movie(),
                public role: string = "" ) {
    }
}