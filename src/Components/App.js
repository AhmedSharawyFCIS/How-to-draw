import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Category from './Category';
import Details from './Details';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
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
                <Route path="/Dashboard/:userName" component={Dashboard}/>
                <Route path="/Category/:type/:userName" component={Category}/>
                <Route path="/Details/:name/:type/:userName" component={Details}/>
            </div>
    </BrowserRouter>           
</Provider>
       
    )
}

export default App;