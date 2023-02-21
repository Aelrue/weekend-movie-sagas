import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import DetailsList from "../DetailsList/DetailsList";

// router will render the content of the components of the routes
// that have paths that matche the URLs
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/movie/:id" exact>
          <DetailsList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
