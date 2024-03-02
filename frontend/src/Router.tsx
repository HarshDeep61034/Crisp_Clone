import React from 'react'
import App from './App';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProject from './pages/CreateProject';
import Config from './pages/Config';
import ProjectPage from './pages/ProjectPage';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/new" element={<CreateProject />}/>
        <Route path="/project/:id" element={<ProjectPage />}/>
        <Route path="/config" element={<Config />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router