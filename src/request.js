
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const requests = {
    feachTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    feactTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
    feactActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    feactComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    feactMysteryMovies:`/discover/tv?api_key=${API_KEY}&with_genres=9648`,
    feactAnimationMovies:`/discover/tv?api_key=${API_KEY}&with_genres=16`,
    feactDocumentMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
    feactFamilyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10751`,
}