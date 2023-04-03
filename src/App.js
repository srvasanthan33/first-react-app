import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterComponent from "./components/Routes/Counter/CounterComponent";
import FormComponent from "./components/Routes/Form/FormComponent";
import HomeComponent from "./components/Routes/Home/HomeComponent";
import SubscribeComponent from "./components/Routes/Subscribe/SubscribeComponent";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="section">
                    <h2>App</h2>
                    <ul className="nav">
                        <li>
                            <Link to="/">Home </Link>
                        </li>
                        <li>
                            <Link to="/Counter">Counter </Link>
                        </li>
                        <li>
                            <Link to="/Subscribe"> Subscribe </Link>
                        </li>
                        <li>
                            <Link to="/Form"> Form </Link>
                        </li>
                    </ul>
                </div>
                <div id="route-element">
                    <Routes>
                        <Route exact path="/" element={<HomeComponent />}>
                            {" "}
                        </Route>
                        <Route exact path="/Counter" element={<CounterComponent />}>
                            {" "}
                        </Route>
                        <Route exact path="/Subscribe" element={<SubscribeComponent />}>
                            {" "}
                        </Route>
                        <Route exact path="/Form" element={<FormComponent />}>
                            {" "}
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
