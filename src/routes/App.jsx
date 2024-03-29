import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout';
import Country from '../containers/Country';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Region from '../containers/Region';
import '../styles/App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/region/:region' element={<Region/>}/>
          <Route path='/country/:country' element={<Country/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;