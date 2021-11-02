import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a9ec577343da161cd0f727d8443d6831',
        language: 'en-US',
    }
});


export default movieDB;