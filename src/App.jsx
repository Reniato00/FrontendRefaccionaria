import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Filter from './pages/Filter';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/filter' element={<Filter/>}/>
            </Routes>
        </BrowserRouter>
    )
}