import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/main/start/start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
