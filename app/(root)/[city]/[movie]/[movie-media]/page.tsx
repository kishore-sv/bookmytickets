"use client"
import { useCity } from "@/hooks/CityProvider";
import { fetchMovieVideos } from "@/TMDB/movies";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function MovieMediaPage() {
    const path = usePathname()
    const movieId = Number(path.split("/")[2])
    const { city } = useCity()

   const [videos, setVideos] = useState<any[]>([]);

    const searchParams = useSearchParams();
    const movieName = searchParams.get("movie");

    console.log(movieName)
    // const youtubeUrl = `https://www.youtube.com/watch?v=${video.key}`;
    const youtubeUrl = `https://www.youtube.com/watch?`;
    useEffect(() => {
        const loadVideos = async () => {
            try {
                const res = await fetchMovieVideos(movieId);
                setVideos(res);
            } catch (err) {
                console.error("Failed to fetch videos:", err);
            }
        };

        loadVideos();
    }, [movieId]);

    useEffect(() => {
        console.log(videos)
    }, [])
    const trailers = videos.filter(
        (v:any) => v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser")
    );

    return (
        <div className="w-full h-[91vh] bg-neutral-100 shadow-lg scroll-smooth overflow-x-scroll " >
            <nav className="w-[100%] h-[8vh] bg-white sticky top-0  py-3 px-6 flex items-center  border-b border-neutral-500/50 " >
                <h2 className=" text-2xl font-semibold text-neutral-900 " >Media of <Link href={`/${city}/${movieId}`} className="text-[var(--primary-color)] capitalize ">{movieName}</Link></h2>
            </nav>
            <div className="w-full  py-2 px-6 flex flex-col gap-4 items-center justify-evenly " >
                {trailers.map((video:any) => (
                    <iframe
                        key={video.id}
                        width="100%"
                        height="415"
                        className="rounded-2xl"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ))}
                <iframe width="100%" height="415" className=" rounded-2xl "
                    src="https://www.youtube.com/embed/bUR_FKt7Iso?si=Ye32rzottuQeItub"
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <iframe width="100%" height="415" className=" rounded-2xl "
                    src="https://www.youtube.com/embed/rc61YHl1PFY?si=jEmwiz0L-6CExtv7"
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <iframe width="100%" height="415" className=" rounded-2xl "
                    src="https://www.youtube.com/embed/rsJ-LGpE7Lc?si=oKgc-6ULb8yMZD0N"
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            </div>
        </div>
    )
}