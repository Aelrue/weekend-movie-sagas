import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Fetch all necessary information: all movies, genres
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_MOVIE_BY_ID", fetchOneMovie);
  yield takeEvery("FETCH_GENRES", fetchGenres);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchOneMovie(action) {
  // get one movie from the DB
  console.log("in fetchOneMovie", action.payload);
  try {
    const movie = yield axios.get(`/api/movie/${action.payload.id}`);
    console.log("get by ID success:");
    yield put({ type: "SET_DETAILS", payload: movie.data });
  } catch {
    console.log("get movie error:", error);
  }
}

function* fetchGenres(action) {
  // get genres from DB
  console.log("in fetchGenres", action.payload);
  try {
    const genres = yield axios.get(`/api/genre/${action.payload}`);

    yield put({ type: "SET_GENRES", payload: genres.data });
    console.log("in fetch genres", genres.data);
  } catch {
    console.log("get genres error", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const genreId = (state = 0, action) => {
  switch (action.type) {
    case "SET_ID":
      return action.payload;
    default:
      return state;
  }
};

const movieId = (state = 0, action) => {
  switch (action.type) {
    case "SET_ID":
      return action.payload;
    default:
      return state;
  }
};

// Used to store movie details retrieved from the server
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    genreId,
    movieId,
    movieDetails,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
