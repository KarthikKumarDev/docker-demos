import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fibonacci from "./components/Fibonacci";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/secondpage">Second Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fibonacci} />
          <Route path="/secondpage" component={SecondPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
