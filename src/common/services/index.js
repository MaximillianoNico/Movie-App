import Movie from './apis/movie';

class Services {
    constructor(){
        this.movie = Movie;
    }
}

export default new Services();