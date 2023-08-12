import "./App.css";
//import noonsong from "./img/noonsong.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Korean from "./pages/Korean";
import Asian from "./pages/Asian";
import Western from "./pages/Western";
import Alcohol from "./pages/Alcohol";
import Dessert from "./pages/Dessert";
import Brunch from "./pages/Brunch";

import ResultPage from "./pages/ResultPage";
import ResultPageList from "./pages/ResultPageList";
import RestPageList from "./pages/RestPageList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/korean" element={<Korean />} />
          <Route path="/asian" element={<Asian />} />
          <Route path="/western" element={<Western />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/brunch" element={<Brunch />} />

          <Route path="/resultpage/:randomValue" element={<ResultPage />} />
          <Route
            path="/resultpagelist/:randomValue"
            element={<ResultPageList />}
          />
          <Route path="/restpagelist" element={<RestPageList />} />

          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
