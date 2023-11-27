import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SubmitRecipePage from "./pages/SubmitRecipePage";
import ViewRecipePage from "./pages/ViewRecipePage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-recipe" element={<SubmitRecipePage />} />
        <Route path="/view-recipe" element={<ViewRecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;
