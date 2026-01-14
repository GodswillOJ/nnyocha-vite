// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './global.css';
import ScrollToHash from './components/ScrollToHash.jsx';

export default function App() {
return (
<div className="font-sans text-gray-900">
    <ScrollToHash />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
</div>
)}