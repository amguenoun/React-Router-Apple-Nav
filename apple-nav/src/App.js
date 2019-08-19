import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { NavWrapper, MacLinks, PadLinks, PhoneLinks, WatchLinks, TVLinks, MusicLinks } from './components/importer'

function App() {

  return (
    <div className="App">
      <Route path='/' component={NavWrapper} />
      <Route path='/mac' component={MacLinks} />
      <Route path='/ipad' component={PadLinks} />
      <Route path='/iphone' component={PhoneLinks} />
      <Route path='/watch' component={WatchLinks} />
      <Route path='/tv' component={TVLinks} />
      <Route path='/music' component={MusicLinks} />
    </div>
  );
}

export default App;
