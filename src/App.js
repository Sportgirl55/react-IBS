import { Header } from "./components/Header/Header.jsx";
import { Body } from "./components/Body/Body.jsx";
import { Description } from "./components/description/Description.jsx";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Header />
        <Body />
    </div>
  );
}

export default App;
