import { getPopularMovies } from "@/app/lib/tmdb";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.results.map((movie: any) => (
          <li key={movie.id} className="p-2 border rounded">
            <p className="font-semibold">{movie.title}</p>
            <p className="text-sm text-gray-500">
              Release: {movie.release_date}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
