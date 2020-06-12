import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Switch, Route} from 'react-router-dom';
import Categories from './components/Categories/Categories';


function App() {
  return (
    <div id="root">
      <Header/>
		<Switch>
			<Route exact path='/categories' component={Categories}></Route>
		</Switch>
    </div>
  );
};

export default App;
