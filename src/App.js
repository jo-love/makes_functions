import { BrowserRouter as Router, Route } from "react-router-dom";
import MultiSelection from "./Pages/MultiSelection";
import Movie from "./Pages/Movie";
// import ScrollContainer from "./Pages/InfiniteScroll";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/multiSelection" component={MultiSelection} />
        <Route path="/movie" component={Movie} />
        {/* <Route path="/infinitescroll" component={ScrollContainer} /> */}
      </Router>
    </div>
  );
}

export default App;
