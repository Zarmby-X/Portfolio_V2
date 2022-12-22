import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFounf";
import "./App.scss"
import LoadingPage from "./Components/Commons/LoadingPage/LoadingPage";
import { useState } from "react";
import Transition from "./Components/Commons/Transition/Transition";
import About from "./Components/About/About";


function App() {
  let [showTransition, setShowTransition] = useState(false);
  let [fastTransition, setFastTransition] = useState(false);

  const handleTransition = (time, fast) => {
    setFastTransition(fast);
    setShowTransition(true);
    setTimeout(() => {
      setShowTransition(false);
      setFastTransition(false);
    }, time);
  }

  return (
    <div className="App">
      {showTransition === true ? <Transition fast={fastTransition}></Transition> : null}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage linkTo={"/MainPage"} handleTransition={handleTransition} />}></Route>
          <Route path="/MainPage" element={<Home handleTransition={handleTransition} />}></Route>
          <Route path="/AboutPage" element={<About handleTransition={handleTransition}></About>}></Route>
          <Route path="/Home" element={<LoadingPage linkTo={"/MainPage"} handleTransition={handleTransition} />}></Route>
          <Route path="/About" element={<LoadingPage linkTo={"/AboutPage"} handleTransition={handleTransition} />}></Route>
          <Route path="/LoadingPage" element={<LoadingPage linkTo={"/MainPage"} handleTransition={handleTransition} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
