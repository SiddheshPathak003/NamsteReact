const React = require("react");
const ReactDOM = require("react-dom/client");
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const App = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
