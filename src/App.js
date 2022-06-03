import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
