import React from "react";
import "./style/main.style.scss";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RigthColumn from "./components/rightColumn/RigthColumn";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path="chat/:userId" element={<RigthColumn />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
