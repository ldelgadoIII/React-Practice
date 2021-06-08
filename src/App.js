import {BrowserRouter as Router} from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <div className="container">
        <Header title="Tasks Tracked" />
      </div>
    </Router>
      
  );
}

export default App;
