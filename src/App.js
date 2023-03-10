import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//components
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Alert from "./components/layouts/Alert";
import User from "./components/users/User";
//pages
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
//global contexts
import { GitHubProvider} from './context/GitHubContext';
import { AlertProvider} from './context/AlertContext';


function App() {
  return (
    <Router>
      <GitHubProvider>
        <AlertProvider>
        <div className="container">
        <Navbar></Navbar>
        <main>
          <Alert></Alert>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path='/users/:login' element={<User></User>}></Route>
            <Route path="/*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
        </AlertProvider>
      </GitHubProvider>
    </Router>
  );
}

export default App;
