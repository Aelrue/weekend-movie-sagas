import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import DetailsList from "../DetailsList/DetailsList";

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
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
