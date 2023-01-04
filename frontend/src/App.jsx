import React from 'react';
import Home from './routes/Home';
import Toy from './routes/Toy';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./error-page";


const App = () => {
    return (
        <div>
            <Routes>
                <Route 
                    path="/"
                    element={<Home />}
                    // errorElement={<ErrorPage />}
                    
                />
                <Route
                    path="/detail/:id"
                    element={<Toy />}
                />
            </Routes>
        </div>
    );
}

export default App;
