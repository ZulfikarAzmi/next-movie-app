import { searchMovies, Movie } from "@/app/lib/tmdb";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query || "";
  const results = query ? await searchMovies(query) : null;

  return (
    <main className="p-6">
      <SearchBar />
      <h1 className="text-2xl font-bold mb-4">
        {query ? `Results for "${query}"` : "Search Results"}
      </h1>

      {query && results ? (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.results
            .filter((m: Movie) => m.poster_path && (m.vote_count ?? 0) > 0)
            .map((movie: Movie) => (
              <li
                key={movie.id}
                className="border rounded p-2 hover:shadow-lg transition"
              >
                <Link href={`/movie/${movie.id}`}>
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
                    ⭐{" "}
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      ) : (
        <p>Type something in the search bar...</p>
      )}
    </main>
  );
}
