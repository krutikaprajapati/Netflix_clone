import "./App.scss";
import Home from "./Components/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
}

export default App;
