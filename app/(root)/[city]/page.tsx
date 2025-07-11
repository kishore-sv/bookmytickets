"use client"
import Filters from "@/components/Filters";
import { useCity } from "@/hooks/CityProvider";
import { fetchNowPlayingMovies, Movie } from "@/TMDB/movies";
import Link from "next/link";
import { useEffect, useState } from "react";


const API_KEY ="be584d28505fea4386cee579b234eac9";

export type Movies = {
  title: string;
  genere: string;
  img: string;
  name: string;
}[]


const genreMap: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};


export const movies: Movies = [
  {
    title: "Salaar: Cease Fire - Part 1",
    genere: "Action/Thriller",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg",
    name: "salaar-1"
  },
  {
    title: "Devara - Part 1",
    genere: "Action/Drama/Thriller",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg",
    name: "devara-1"
  },
  {
    title: "F1: The Movie",
    genere: "Action/Thriller/Sports",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/f1-the-movie-et00403839-1750674185.jpg",
    name: "f1"
  },
  {
    title: "Kuberaa",
    genere: "Action/Thriller",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA3MS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390532-qamsrplmga-portrait.jpg",
    name: "kuberaa"
  },
]


export const MovieContainer = () => {
  const { city } = useCity()
  return (
    <div className="w-full h-full mt-4 flex  scroll-smooth overflow-x-scroll items-center gap-3 " >

      {
        movies.map((movie, idx) => (
          <Link key={idx} href={`/${city}/${movie.name}`} className="overflow-hidden h-120 min-w-[30%] mb-5  rounded-xl cursor-pointer" >
            <img
              src={movie.img}
              alt={movie.name} className="rounded-xl selection:bg-neutral-900/30 h-[87.5%] object-cover text-neutral-100 bg-neutral-800 w-full  " />
            <div className="mt-2 ml-1 ">
              <h6 className="text-xl font-semibold"  >{movie.title}</h6>
            </div>
          </Link>
        ))
      }

    </div>
  )
}



export default function Home() {
  const { city } = useCity()
  // const [movies, setMovies] = useState<Movie[]>([]);


  // useEffect(() => {
  //   async function getMovies() {
  //     try {
  //       const res = await fetchNowPlayingMovies();
  //       setMovies(res);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   }
  //   getMovies();
  // }, []);


  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch movies from TMDb
  const fetchMovies = async (pageNum: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&region=IN&page=${pageNum}`
      );

      if (!res.ok) throw new Error("Failed to fetch movies");

      const data = await res.json();
      setMovies((prev) => [...prev, ...data.results]);
      setHasMore(pageNum < 7); // stop at page 7
    } catch (err) {
      console.error(err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  // Fetch new page when page state changes
  useEffect(() => {
    if (page > 1) fetchMovies(page);
  }, [page]);









  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  // const fullPosterUrl = `${baseImageUrl}${poster_path}`;


  return (
    <div className="w-full h-full px-40">
      <h2 className="text-xl leading-8 font-bold mt-4" >Movies in <span className=" capitalize " >{city}</span> </h2>
      <Filters />
      <main className="w-full h-full mt-4 flex flex-wrap scroll-smooth overflow-y-scroll items-center gap-3 " >

        {/* {
          movies.map((movie, idx) => (
            <Link key={idx} href={`/${city}/${movie.name}`} className="overflow-hidden h-120 w-[24%] mb-5 group rounded-xl cursor-pointer" >
              <img
                src={movie.img}
                alt={movie.name} className="rounded-xl selection:bg-neutral-900/30 h-[87.5%] object-cover text-neutral-100 bg-neutral-800 w-full group-hover:scale-[1.01] transition-all ease-in-out  " />
              <div className="mt-2 ml-1 ">
                <h6 className="text-xl font-semibold"  >{movie.title}</h6>
                <p className="text-md font-medium text-neutral-500/80 ">{movie.genere}</p>
              </div>
            </Link>
          ))
        } */}

        {movies.map((movie: Movie,idx) => (
          <Link key={`${movie.id}-${idx}`} href={`/${city}/${movie.id}`} className="overflow-hidden h-120 w-[24%] mb-5 group rounded-xl cursor-pointer" >
            <img
              src={`${baseImageUrl}/${movie.poster_path}`}
              // src={`${baseImageUrl}/${movie.backdrop_path}`}
              alt={movie.title} loading="lazy" className="rounded-xl selection:bg-neutral-900/30 h-[87.5%] object-cover text-neutral-100 bg-neutral-800 w-full group-hover:scale-[1.01] transition-all ease-in-out  " />
            <div className="mt-2 ml-1 ">
              <h6 className="text-xl font-semibold"  >{movie.title}</h6>
              <p className="text-md font-medium text-neutral-500/80 ">{
                movie.genre_ids
                  .map((id) => genreMap[Number(id)])
                  .filter(Boolean)
                  .join("/")
              }</p>

            </div>
          </Link>
        ))}
        
      </main>
       {loading && (
        <div className=" text-center text-gray-500 py-4">Loading more movies...</div>
      )}
      {!hasMore && (
        <div className=" text-center text-gray-500 py-4">You’ve reached the end 🎬</div>
      )}
    </div>
  );
}
