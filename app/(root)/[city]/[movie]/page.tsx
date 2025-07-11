"use client"
import { usePathname, useRouter } from "next/navigation"
import { MovieContainer } from "../page";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCity } from "@/hooks/CityProvider";
import { fetchMovieById } from "@/TMDB/movies";


type Genre = { id: number; name: string };


export default function Movie() {
    const [play, setPlay] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const { city } = useCity()
    const path = usePathname()
    const movieId = Number(path.split("/")[2])

    const router = useRouter()

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState<any>({});
    useEffect(() => {
        const loadMovie = async () => {
            try {
                setLoading(true);
                const movie = await fetchMovieById(movieId);
                setMovie(movie);
            } catch (error) {
                console.error("Failed to load movie", error);
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [movieId]);



    return (
        <section className="w-full">

            <div className="w-full h-[8vh] bg-white border-b border-neutral-500/20 shadow-xl flex justify-between items-center px-38 sticky top-[8vh] ">
                <h2 className=" text-2xl font-bold capitalize ">
                    {movie.title}
                </h2>
                <button className="cursor-pointer mr-40 " >
                    <div className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 transition-all ease-in-out text-lg font-medium rounded-md cursor-pointer text-white py-2 px-5" >Book Tickets</div>
                </button>
            </div>

            <div className="w-full h-full -translate-y-[8vh] relative">
                {loading ? <div className="w-full h-40 bg-red-700"></div> : <img
                    src={`${baseImageUrl}/${movie.backdrop_path}`}
                    // src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
                    alt={movie.title}
                    className="w-full h-100 object-cover"
                />}

                <div className="absolute top-0 left-0 w-full h-full  z-10">
                    <div className=" w-[70%] h-full flex  text-neutral-100 gap-4 bg-neutral-900/80 backdrop-blur-[0.2px] px-40 py-2  " >
                        <img
                            src={`${baseImageUrl}/${movie.poster_path}`}
                            // src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
                            alt={movie.title} className="w-auto cursor-pointer h-full rounded-lg bg-neutral-800/20 " />
                        {!loading || !movie && <Link href={`/${city}/${movie.id}/media?movie=${movie.title}`}
                            // onClick={() => setPlay(true)}
                            className=" min-w-[25%] h-full absolute cursor-pointer rounded-lg flex justify-center items-center ">
                            <div className=" p-1 bg-neutral-800 rounded-sm flex items-center gap-1 justify-center " >
                                <Play fill="white" size={16} /> <p className="font-medium" >Trailers</p>
                            </div>
                        </Link>}
                        {play && <iframe width="560" height="315" src="https://www.youtube.com/embed/4GPvYMKtrtI?si=eOZzG1dRJrotj0HD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}



                        <div className="flex flex-col justify-center gap-6  " >

                            <h2 className="text-3xl font-bold" >{movie.title}</h2>
                            {/* <p>2D,IMAX 2DTelugu,Hindi,Kannada,Tamil,Malayalam</p> */}
                            <p>{movie.runtime}min
                                •{movie?.genres?.length > 0
                                    ? movie.genres.map((g: Genre) => g.name).join(", ")
                                    : "No genres available"
                                }
                                •{movie.adult ? "A" : "U/A"}
                                •{movie.release_date}
                            </p>
                            <button
                                // onClick={() => router.push(`/hall/${city}/${movie.title}`)}
                                onClick={() => router.push(`/${city}/${movieId}/halls?movie=${movie.title}`)}
                                className="cursor-pointer mr-40 " >
                                <div className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 transition-all ease-in-out text-lg font-medium rounded-md cursor-pointer text-white py-2 px-5" >Book Tickets</div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <div className=" w-[80%] px-40 space-y-5 mt-5  " >
                <h3 className="text-xl font-semibold" >About the movie</h3>
                <p className="font-medium border-b border-neutral-500/50 pb-5 text-md text-neutral-700" >{movie.overview}</p>
                <h3 className="text-xl font-semibold" >Cast</h3>
                <p className="font-medium border-b border-neutral-500/50 pb-5 text-md text-neutral-700" >Brace yourself for an extraordinary tale of rebellion filled with power-packed action.</p>
                <h3 className="text-xl font-semibold" >About the movie</h3>
                <p className="font-medium border-b border-neutral-500/50 pb-5 text-md text-neutral-700" >Brace yourself for an extraordinary tale of rebellion filled with power-packed action.</p>
                <h3 className="text-xl font-semibold" >Cast</h3>
                <p className="font-medium border-b border-neutral-500/50 pb-5 text-md text-neutral-700" >Brace yourself for an extraordinary tale of rebellion filled with power-packed action.</p>
                <h3 className="text-xl font-semibold" >You might also like</h3>
                <MovieContainer />
            </div>
        </section>
    )
}