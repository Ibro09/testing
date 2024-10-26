import React, { } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Friend from "./Routes/Friends";
import Tasks from "./Routes/Tasks";
import Spin from "./Routes/Spin";
import Wallet from "./Routes/Wallet";
import ModalPage from "./components/Modal";
import Level from "./Routes/Level";




const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/friend'
          element={<Friend />}
        />
        <Route
          path='/tasks'
          element={<Tasks />}
        />
        <Route
          path='/spin'
          element={<Spin />}
        />
        <Route
          path='/wallet'
          element={<Wallet />}
        />
        <Route
          path='/modal'
          element={<ModalPage />}
        />
        <Route
          path='/level'
          element={<Level />}
        />
      </Routes>
    </Router>
  );
};

export default App;
