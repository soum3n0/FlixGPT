# 🎬 FlixGPT

**FlixGPT** is an AI-powered movie discovery web app built using **React**, **Redux**, **Firebase**, and the **TMDB API**, with Gemini AI integration for smart movie suggestions based on user intent.

---

## 🚀 Features

- 🔐 **Firebase Authentication** – Sign-up, Login, Logout with Email/Password
- 🎞️ **TMDB Movie Integration** – Now Playing, Top Rated, Upcoming, Popular
- 🤖 **Gemini AI Movie Recommender** – Suggests movies based on natural language input
- 🌍 **Multi-language Support** – Switch between multiple languages (via Redux)
- 📺 **YouTube Trailer Embed** – Autoplay, mute, and loop trailers
- 📦 **Redux Toolkit** – Centralized state management
- 🔀 **Protected Routing** – Redirect unauthorized access using React Router
- 💡 **Form Validation** – Regex-based validation for email & password
- 🌐 **Deployed on Firebase Hosting**

---

## 🧩 Tech Stack

| Tech           | Usage                        |
|----------------|------------------------------|
| React (CRA)    | Frontend UI                  |
| Redux Toolkit  | Global State Management      |
| Firebase       | Auth & Hosting               |
| TMDB API       | Movie Data                   |
| Gemini AI API  | Movie Recommendations        |
| Tailwind CSS   | Styling                      |
| React Router   | Routing                      |
| Regex          | Form Handling & Validation   |

---

## 🗂️ Project Structure

```txt
/src
├── components/
│   ├── AiPage.js
│   ├── Body.js
│   ├── Browse.js
│   ├── Error.js
│   ├── Header.js
│   ├── LoadingPage.js
│   ├── Login.js
│   ├── MainContainer.js
│   ├── MovieCard.js
│   ├── MovieInfo.js
│   ├── MovieList.js
│   ├── SecondaryContainer.js
│   ├── Shimmer.js
│   ├── VideoBackground.js
│   └── VideoTitle.js
├── Hooks/
│   ├── useMovieDetails.js
│   ├── useMovieTrailer.js
│   ├── useNowPlayingMovies.js
│   ├── usePasswordChange.js
│   ├── usePopularMovies.js
│   ├── useTopRatedMovies.js
│   └── useUpcomingMovies.js
├── utils/
│   ├── appStore.js
│   ├── constrants.js
│   ├── firebase.js
│   ├── gemini.js
│   ├── formValidation.js
│   ├── gptSlice.js
│   ├── langConstraints.js
│   ├── moviesSlice.js
│   └── userSlice.js
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flixgpt.git
   cd flixgpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add environment variables**  
   Create a `.env` file in the root and add your TMDB and Gemini API keys:
   ```ini
   REACT_APP_TMDB_API_KEY=your_tmdb_key
   REACT_APP_GEMINI_API_KEY=your_gemini_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Visit the app**
   ```
   http://localhost:3000
   ```

---

## 🔥 Firebase Hosting Deployment

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## ✨ Future Improvements

- Add user-specific **watchlists** using Firestore
- Add **debounced live search** suggestions
- Convert to **PWA** for offline support
- Add **unit tests** with Jest & React Testing Library
- Migrate to **Next.js for SSR and SEO**

---

> Built with 💡 and 🎬 by Soumen Dey
