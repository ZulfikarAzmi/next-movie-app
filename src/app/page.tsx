import { getPopularMovies } from "@/app/lib/tmdb";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default async function Home() {
  const popular = await getPopularMovies();

  return (
    <main className="p-6">
      {/* Search */}
      <SearchBar />

      {/* Popular Movies */}
      <section className="mb-10">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popular.results
            .filter((m: any) => m.poster_path && m.vote_average > 0)
            .map((movie: any) => (
              <li key={movie.id} className="border rounded p-2">
                <Link href={`/movie/${movie.id}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                      width={300}
                      height={450}
                      className="rounded"
                    />
                    <h2 className="mt-2 font-semibold">{movie.title}</h2>
                    <p className="text-sm text-gray-500">
                      {movie.release_date?.slice(0, 4)}
                    </p>
                    <p className="text-sm">
                      ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
