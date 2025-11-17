import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/Navbar';


function App() {
return (
<BrowserRouter>
<Navbar />
<div className="container mt-5">
<Routes>
<Route path="/" element={<ForgotPassword />} />
<Route path="/reset-password/:token" element={<ResetPassword />} />
</Routes>
</div>
</BrowserRouter>
);
}


export default App;