import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

import HomePage from "./pages/Home/HomePage";
import OpenAI from "./pages/OpenAI/OpenAi";
import Perplexity from "./pages/Perplexity/Perplexity";
import Gemini from "./pages/Gemini/Gemini";
import CursorAI from "./pages/Cursor/Cursor";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="openai" element={<OpenAI/>}/>
          <Route path="perplexity" element={<Perplexity/>}/>
          <Route path="gemini" element={<Gemini/>}/>
          <Route path="cursor" element={<CursorAI/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
