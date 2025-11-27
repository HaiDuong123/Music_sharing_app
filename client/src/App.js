import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './components/UploadPage';
import DownloadPage from './components/DownloadPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/download/:id" element={<DownloadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;