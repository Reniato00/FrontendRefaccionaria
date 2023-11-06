import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Filter from './pages/Filter';
import GridFilterAdvanced from './pages/GridFilterAdvanced';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/filter' element={<Filter/>}/>
                <Route path='/gridFilterAdvanced' element={<GridFilterAdvanced/>} />
            </Routes>
        </BrowserRouter>
    )
}