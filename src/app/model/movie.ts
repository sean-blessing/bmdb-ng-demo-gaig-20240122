export class Movie {

    constructor(
        public id: number = 0, 
        public title: string = "",
        public rating: string = "", 
        public year: number = 0,
        public director: string = "") {

    }

    about(): string {
        return `Movie Details:  id=${this.id}, title=${this.title}, 
                rating=${this.rating}, year=${this.year}, 
                director=${this.director}`;
    }
}