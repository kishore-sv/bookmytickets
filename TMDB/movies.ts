const API_KEY = "be584d28505fea4386cee579b234eac9";
const region = "IN";



export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string | null;
  genre_ids: string[];
};




export async function fetchNowPlayingMovies(): Promise<Movie[]> {
  //   const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=IN&page=2`
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  console.log(data)
  return data.results as Movie[];
}


export async function fetchMovieById(movieId: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  if (!res.ok) {
    console.error("Failed to fetch movie:", res.status, res.statusText);
    throw new Error("Failed to fetch movie");
  }
  const data = await res.json();
  return data;
}


export const fetchMovieVideos = async (movieId: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();

  // Filter only trailers or teasers from YouTube
  const youtubeVideos = data.results.filter(
    (video: any) =>
      video.site === "YouTube" && (video.type === "Trailer" || video.type === "Teaser")
  );

  return youtubeVideos;
};

// export async function fetchMovieVideos(movieId: number) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
//   );
//   const data = await res.json();

//   // ✅ Return only the video array
//   return data.results;
// }


// export const genreMap: Record<number, string> = {
//   28: "Action",
//   12: "Adventure",
//   16: "Animation",
//   35: "Comedy",
//   80: "Crime",
//   99: "Documentary",
//   18: "Drama",
//   10751: "Family",
//   14: "Fantasy",
//   36: "History",
//   27: "Horror",
//   10402: "Music",
//   9648: "Mystery",
//   10749: "Romance",
//   878: "Science Fiction",
//   10770: "TV Movie",
//   53: "Thriller",
//   10752: "War",
//   37: "Western"
// };





