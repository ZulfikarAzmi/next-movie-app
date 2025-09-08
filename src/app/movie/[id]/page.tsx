import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getMovieRecommendations,
  Movie,
  Cast,
  Crew,
  Video,
  CreditsResponse,
  MoviesResponse,
} from "@/app/lib/tmdb";
import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  // Fetch data
  const movie: Movie = await getMovieDetails(params.id);
  const credits: CreditsResponse = await getMovieCredits(params.id);
  const videos = await getMovieVideos(params.id);
  const recommendations: MoviesResponse = await getMovieRecommendations(
    params.id
  );

  // Process data
  const cast: Cast[] = credits.cast.slice(0, 10);
  const directors: Crew[] = credits.crew.filter((c) => c.job === "Director");
  const trailer = videos.results.find(
  ({ type, site }: Video) => type === "Trailer" && site === "YouTube"
);


  return (
    <main className="p-6">
      {/* Detail section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {movie.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded shadow-lg"
          />
        )}

        <div>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          {movie.tagline && (
            <p className="text-gray-600 mb-4 italic">{movie.tagline}</p>
          )}
          <p className="mb-2 text-gray-700">
            Release Date: {movie.release_date}
          </p>
          <p className="mb-2 text-gray-700">
            Rating: ⭐ {movie.vote_average?.toFixed(1)} ({movie.vote_count} votes)
          </p>
          <p className="mb-4 text-gray-700">{movie.overview}</p>

          <div className="mb-2">
            <strong>Directors: </strong>
            {directors.map((d) => d.name).join(", ") || "N/A"}
          </div>
        </div>
      </div>

      {/* Trailer */}
      {trailer && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              className="w-full h-full rounded"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Top Cast */}
      <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {cast.map((actor) => (
          <li key={actor.id} className="text-center">
            {actor.profile_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                width={200}
                height={300}
                className="rounded mb-2"
              />
            )}
            <p className="font-medium">{actor.name}</p>
            <p className="text-sm text-gray-500">as {actor.character}</p>
          </li>
        ))}
      </ul>

      {/* Recommendations */}
      {recommendations.results.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended Movies</h2>
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {recommendations.results.slice(0, 10).map((rec) => (
              <li key={rec.id} className="text-center">
                <Link href={`/movie/${rec.id}`}>
                  {rec.poster_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${rec.poster_path}`}
                      alt={rec.title}
                      width={200}
                      height={300}
                      className="rounded mb-2"
                    />
                  )}
                  <p className="font-medium">{rec.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
