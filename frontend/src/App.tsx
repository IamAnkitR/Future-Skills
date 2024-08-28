import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelpPage } from "./pages/HelpPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
