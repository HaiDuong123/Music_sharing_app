// client/src/apiConfig.js
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

export const API_URL = isLocal 
  ? "http://localhost:5000" 
  : "https://music-sharing-app-6qd8.onrender.com"; 