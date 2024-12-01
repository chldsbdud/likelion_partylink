import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/main/start/start-inviter.jsx";
import StartGuest from "./components/main/start/start-guest.jsx";
import StartGuestNext from "./components/main/start/start-guset-loading.jsx";
import GameCategory from "./components/main/start/game-category.jsx";
import GameLoading from "./components/main/start/game-loading.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/start-guest" element={<StartGuest />}></Route>
        <Route path="/start-guest-loading" element={<StartGuestNext />}></Route>
        <Route path="/game-category" element={<GameCategory />}></Route>
        <Route path="/game-loading" element={<GameLoading />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
