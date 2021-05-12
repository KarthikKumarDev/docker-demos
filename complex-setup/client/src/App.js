import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fibonacci from "./components/Fibonacci";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Fibonacci} />
      </div>
    </Router>
  );
}

export default App;
