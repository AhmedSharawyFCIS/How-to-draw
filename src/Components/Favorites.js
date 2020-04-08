import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'

import '../CSS/Category.css'
import api from '../axios'

class Favorites extends React.Component {


state = {logout:false,data:[]}
componentDidMount()
{

    api.get(`/favourites/${this.props.match.params.userName}`)
    .then(res=>{

        console.log(res.data)
        this.setState({data:res.data})
    }).catch(error=>{

        console.log("error",error)
    })

}


handleLogOut = () =>{

    this.setState({logout:true})
}
 render()
 {
     console.log(this.props.match.params.type)
     if(this.state.logout)
     {
        return <Redirect to={`/Login`}/>
     }
    return(

        <div className='div-container'>

            <div className='header'>
                <h3>{this.props.match.params.userName}</h3>
                <button  className='logout-button' onClick={this.handleLogOut}>Logout</button>
            </div>
            
            <h1>how to draw</h1>
            <p>step-by-step</p>


            <h2>Favorites</h2>
            
            <div className='content'>
                
                
            
                {this.state.data.map((item,i)=>{

                    console.log("fafa")
                    return(
                        <Link to={`/Details/${item.dir}/${item.type}/${this.props.match.params.userName}`} >
                            <img src={ require(`../img/${item.dir}`)} alt="item" />
                        </Link>
                    )
                    })  }
            </div>
            
        </div>
    )
 }
}

export default Favorites;