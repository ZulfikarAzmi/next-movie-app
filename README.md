# 🎬 Movieblitz App

Movieblitz App is a web application built with **Next.js 14 (App Router)** that connects to the **TMDB API** to search and display detailed movie information including posters, trailers, cast, and recommendations.

## 🚀 Features
- 🔍 Search movies by title
- 🎥 Movie details (poster, rating, release date, overview, tagline)
- 👨‍🎤 Cast & Crew (Top 10 actors, directors)
- ▶️ Trailer embedded from YouTube
- 🎞️ Recommended related movies

## 🛠️ Tech Stack
- [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://developer.themoviedb.org/)

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/username/movie-app.git
cd movie-app
```

### 2. Install dependencies
Using npm:
```bash
npm install
```
or with pnpm:
```bash
pnpm install
```

### 3. Setup environment variables
Create a `.env.local` file in the root directory and add your TMDB API key:
```env
TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

---

⚠️ **Disclaimer:** This product uses the TMDB API but is not endorsed or certified by TMDB.
