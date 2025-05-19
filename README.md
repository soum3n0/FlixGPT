<!-- # structure
- sign-in/sign-up page
- routing
- useRef hook
- firebase
    - npm install firebase
    - npm install -g firebase-tools
    - firebase login
    - firebase init
    - firebase deploy
- redux store
- signin/signup  -  store login logout info to redux store
    - createUserWithEmailAndPassword - to create account
    - signInWithEmailAndPassword - to login
    - firebase 'onAuthStateChange' api to perform action based on signin/signup/signout and return unsubscribe function to unmount : kind of event listener
    - updateProfile - to update the name
    - signOut - to sign out
- useNavigate hook - to go to any page
- bugFixed: signed up user name issue resolved
- bugFixed: if not logged in redirect browse page to login page and vice-versa
- optimize: routing using outlet
- TMDB api for now playing movie list using custom hook
- create movie slice and store movie list
- fetch data for trailer video
- update store with trailer video data
- embeded youtube video and make it autoplay and mute
- build secondary container
- build movie list 
- build movie card
- TMDB image cdn for movie poster
- GPT search page
- (Feature) Multi-language




# form validation
- Formic
- regex(regular expression) for email/password valiation

# form authentication
- firebase

# Movie list
- TMDB API

# Start the application
- npm install
- npm run start
localhost:3000 -->


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

| Tech | Usage |
|------|-------|
| React (CRA) | Frontend UI |
| Redux Toolkit | Global State Management |
| Firebase | Auth & Hosting |
| TMDB API | Movie Data |
| Gemini AI API | Movie Recommendations |
| Tailwind CSS | Styling |
| React Router | Routing |
| Regex | Form Handling & Validation |

---

## 🗂️ Project Structure

/src
├── components/
│ ├── AiPage.js
│ ├── Body.js
│ ├── Browse.js
│ ├── Error.js
│ ├── Header.js
│ ├── LoadingPage.js
│ ├── Login.js
│ ├── MainContainer.js
│ ├── MovieCard.js
│ ├── MovieInfo.js
│ ├── MovieList.js
│ ├── SecondaryContainer.js
│ ├── Shimmer.js
│ ├── VideoBackground.js
│ └── VideoTitle.js
├── Hooks/
│ ├── useMovieDetails.js
│ ├── useMovieTrailer.js
│ ├── useNowPlayingMovies.js
│ ├── usePasswordChange.js
│ ├── usePopularMovies.js
│ ├── useTopRatedMovies.js
│ └── useUpcomingMovies.js
├── utils/
│ ├── appStore.js
│ ├── constrants.js
│ ├── firebase.js
│ ├── formValidation.js
│ ├── gemini.js
│ ├── gptSlice.js
│ ├── langConstraints.js
│ ├── moviesSlice.js
│ └── userSlice.js


---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flixgpt.git
   cd flixgpt

2. **Install dependencies**
   ```bash
   npm install

3. **Add environment variables**
   Create a .env file in the root and add your TMDB and Gemini API keys:
   ```ini
   REACT_APP_TMDB_API_KEY=your_key
   REACT_APP_GEMINI_API_KEY=your_key

4. **Start the development server**
   ```bash
   npm start

5. **Visit**
   ```arduino
   http://localhost:3000


##  🔥 Firebase Hosting Deployment
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy


##  ✨ Future Improvements
 * Add user-specific watchlists using Firestore
 * Add debounced live search suggestions
 * Convert to PWA for offline support
 * Add unit tests with Jest & React Testing Library
 * Migrate to Next.js for SSR and SEO