import Request from '../request';

class Movie extends Request {
    constructor(props) {
        super(props);
        this.url = {
            key: 'faf7e5bb',
        }
    }
    /**
     * Users
     */
    searchMovie = (search = 'Batman', page = 1) => {
        const params = {
            apikey: this.url.key,
            s: search,
            page,
        }
        return this.get({ path: `/`, payload: { params } })
    }
}

export default new Movie();