import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Category from './Category';
import Details from './Details';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import Favorites from './Favorites';
import Completed from './Completed';
import Reducer from '../Redux/reducer';

const Reducers = combineReducers({

    FlatsAndUser:Reducer
  })
  
const reduxStore = createStore(Reducers)
const App = () => {

    return(

<Provider store={reduxStore}>
    <BrowserRouter>
            <div>
                <Route path="/" exact component={Register}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Dashboard/:userName" exact component={Dashboard}/>
                <Route path="/Category/:type/:userName" exact component={Category}/>
                <Route path="/Details/:name/:type/:userName" exact component={Details}/>
                <Route path="/Favorites/:userName"  exact component={Favorites}/>
                <Route path="/Completed/:userName" exact component={Completed}/>
            </div>
    </BrowserRouter>           
</Provider>
       
    )
}

export default App;