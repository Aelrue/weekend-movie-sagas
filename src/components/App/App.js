import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import DetailsList from "../DetailsList/DetailsList";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/DetailsList" exact>
          <DetailsList />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
