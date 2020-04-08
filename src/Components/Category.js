import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'

import '../CSS/Category.css'


class Category extends React.Component {

Animal = ['animal1.jpeg','animal2.jpeg','cow.jpeg','tiger.jpeg','oswald the moose.jpeg'];
Car = ['car1.jpeg','car2.jpeg','car3.jpeg','car4.jpeg','car5.jpeg','car6.jpeg'];
Flower = ['flower1.jpeg','flower2.jpeg','flower3.jpeg','flower4.jpeg','flower5.jpeg'];
Food = ['food1.jpeg','food2.jpeg','food3.jpeg','pizza.jpeg'];

state = {logout:false}

renderImage = (name) =>{

    let type = this.props.match.params.type
    if(type == 'Animal')
    {
        return(

            this.Animal.map((item,i)=>{

                return(
                  
                    
                    <Link to={`/Details/${item}/Animals/${name}`} >
                        
                        <img src={ require(`../img/${item}`)} alt="item" />
                    </Link>
                   
                )
            })  
        )
    }

    else if(type == 'Car')
    {
        return(

            this.Car.map((item,i)=>{

                console.log("fafa")
                return(
                    <Link to={`/Details/${item}/Cars/${name}`} >
                        <img src={ require(`../img/${item}`)} alt="item" />
                    </Link>
                )
            })  
        )
    }

    else if(type == 'Flower')
    {
        return(

            this.Flower.map((item,i)=>{

                console.log("fafa")
                return(
                    <Link to={`/Details/${item}/Flowers/${name}`} >
                        <img src={ require(`../img/${item}`)} alt="item" />
                    </Link>
                )
            })  
        )
    }

    else if (type == 'Food')
    {
        return(

            this.Food.map((item,i)=>{

                console.log("fafa")
                return(
                    <Link to={`/Details/${item}/Food/${name}`} >
                        <img src={ require(`../img/${item}`)} alt="item" />
                    </Link>
                )
            })  
        )
    }


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


            <div className='content'>
                {/* <img src={ require('../img/animal1.jpeg')} alt="Italian Trulli" />  */}
            
               {
                   
                   this.renderImage(this.props.match.params.userName)
               }
            </div>
            
        </div>
    )
 }
}

export default Category;