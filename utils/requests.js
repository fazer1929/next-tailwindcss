const API_KEY = process.env.API_KEY

export default {
   fetchTrending:{
       title:"Trending",
       url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
   } ,
   fetchTopRatedMovies:{
    title:"Top Rated Movies",
    url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
} ,
fetchTopRatedShows:{
    title:"Top Rated Shows",
    url:`/tv/top_rated?api_key=${API_KEY}&language=en-US`
},
 fetchMystery:{
    title:"Mystery",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
} ,
fetchComedy:{
    title:"Comedy",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
} ,
fetchHorror:{
    title:"Horror",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
} ,
fetchRomance:{
    title:"Romance",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
} ,

}