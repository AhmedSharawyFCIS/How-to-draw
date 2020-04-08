import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'

import '../CSS/Category.css'

import '../CSS/Details.css'
import api from '../axios'


class Details extends React.Component {


    state = {logout:false,favColor:'',textFavColor:'',completeColor:'',textCompleteColor:'',showFav:false,showComplete:false}
    handleLogout = () =>{

        this.setState({logout:true})

    }

    addToFav = () =>{

        this.setState({favColor:'blue',textFavColor:'#FFF'})
        api.post('/favourites',{

            user_name :this.props.match.params.userName ,
            dir:this.props.match.params.name,
            type:this.props.match.params.type
        }).then(res=>{

            console.log(res.data)
        }).catch(error=>{

            console.log("error",error)
        })
    }


    addToComplete = () => {

        this.setState({completeColor:'blue',textCompleteColor:'#FFF'})
        api.post('/completed',{

            user_name :this.props.match.params.userName ,
            dir:this.props.match.params.name,
            type:this.props.match.params.type
        }).then(res=>{

            console.log(res.data)
        }).catch(error=>{

            console.log("error",error)
        })

    }
 render()
 {
     console.log(this.props.match.params.name)
     if(this.state.logout)
     {
        return <Redirect to={`/Login`}/>
     }

     else if(this.state.showFav)
     {
        return <Redirect to={`/Favorites/${this.props.match.params.userName}`}/>
     }

     else if(this.state.showComplete)
     {
        return <Redirect to={`/Completed/${this.props.match.params.userName}`}/>
     }
    return(

        <div className='div-container'>

            <div className='header'>
                <h3>{this.props.match.params.userName}</h3>
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
                    <button  className='logout-button' onClick={this.addToFav} style={{backgroundColor:this.state.favColor,color:this.state.textFavColor}}>Fav</button>
                    <button  className='logout-button' onClick={this.addToComplete} style={{backgroundColor:this.state.completeColor,color:this.state.textCompleteColor}}>Complete</button>
                </div>
            
            </div>

            <div className="fav-container header">
                <button  className='logout-button' onClick={()=>{this.setState({showFav:true})}}>show all fav</button>
                <button  className='logout-button' onClick={()=>{this.setState({showComplete:true})}}>show all complete</button>
            </div>
            
        </div>
    )
 }
}

export default Details;