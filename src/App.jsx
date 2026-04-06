import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<div>Features</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
