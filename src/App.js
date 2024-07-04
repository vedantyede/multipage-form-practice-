import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Summary from "./pages/Summary";

function App() {
  return (
    //The Provider component from react-redux is used to make the Redux store available to the entire application
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
