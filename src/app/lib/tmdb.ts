export async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  return res.json();
}

export async function searchMovies(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}

export async function getMovieDetails(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

export async function getMovieCredits(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error("Failed to fetch movie credits");
  return res.json();
}

export async function getMovieVideos(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error("Failed to fetch movie videos");
  return res.json();
}

export async function getMovieRecommendations(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error("Failed to fetch recommendations");
  return res.json();
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}


