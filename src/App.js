import { BrowserRouter as Router, Route } from "react-router-dom";
import MultiSelection from "./Pages/MultiSelection";
import Movie from "./Pages/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/multiSelection" component={MultiSelection} />
        <Route path="/movie" component={Movie} />
      </Router>
    </div>
  );
}

export default App;
