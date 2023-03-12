import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import SinglePage from './components/Singlepage';
import Topbar from './components/Topbar';
import Action from './components/Genres/Action';
import Comedy from './components/Genres/Comedy';
import Drama from './components/Genres/Drama';
import WebSeries from './components/Genres/WebSeries';
import Recommended from './components/Genres/Recommended';
import Love from './components/Genres/Love';
import Retro from './components/Genres/Retro'
import Search from './components/Search';

const App = () => {
  return (
    <div >

      <Router>
        <Topbar />

        <Routes>

       
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/action" element={<Action />} />
          <Route exact path="/comedy" element={<Comedy />} />
          <Route exact path="/drama" element={<Drama />} />
          <Route exact path="/webseries" element={<WebSeries />} />
          <Route exact path="/recommended" element={<Recommended />} />
          <Route exact path="/love" element={<Love />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/retro" element={<Retro />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:movie_id" element={<SinglePage />} />
        </Routes>




      </Router>




    </div>
  )
}

export default App