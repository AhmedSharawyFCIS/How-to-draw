import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'

import '../CSS/Category.css'

import '../CSS/Details.css'



class Details extends React.Component {


    state = {logout:false}
    handleLogout = () =>{

        this.setState({logout:true})

    }
 render()
 {
     console.log(this.props.match.params.name)
     if(this.state.logout)
     {
        return <Redirect to={`/Login`}/>
     }
    return(

        <div className='div-container'>

            <div className='header'>
                <h5>{this.props.match.params.userName}</h5>
                <button  className='logout-button' onClick={this.handleLogout}>Logout</button>
            </div>
            
            <h1>how to draw</h1>
            <p>step-by-step</p>


            <div className='ImageContainer'>
                {/* <img src={ require('../img/animal1.jpeg')} alt="Italian Trulli" />  */}
                <div className="type-div">
                    {this.props.match.params.type}:
                </div>
                
                <img src={ require(`../img/${this.props.match.params.name}`)} className="image"  />

                <div className="imageButton">
                    <button  className='logout-button'>Fav</button>
                    <button  className='logout-button'>Complete</button>
                </div>
            
            </div>

            <div className="fav-container header">
                <button  className='logout-button'>show all fav</button>
                <button  className='logout-button'>show all complete</button>
            </div>
            
        </div>
    )
 }
}

export default Details;