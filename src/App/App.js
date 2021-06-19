import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Homepage from "./Homepage/Homepage";
import DinoPreview from "./DinoPreview/DinoPreview";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/preview">
            <DinoPreview />
          </Route>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
