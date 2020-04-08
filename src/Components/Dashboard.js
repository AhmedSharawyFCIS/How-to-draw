import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'
import '../CSS/Dashboard.css'


class Dashboard extends React.Component  {

     state = {logout:false}

 handleLogout = () => {

    this.setState({logout:true})
     
    }
    render(){
        
        if(this.state.logout)
        {
            return  <Redirect to={`/Login`}/>
        }
    return(

        <div className='div-container'>
            
            <div className='header'>
                <h3>{this.props.match.params.userName}</h3>
                <button  className='logout-button' onClick={this.handleLogout}>Logout</button>
            </div>
            <h1>how to draw</h1>
            <p>step-by-step</p>

            <div className="content" style={{flexDirection:'column'}}>
                <div className="content-header">what do you want to draw!</div>
                <div className="button-list">
                    
                    <Link to={`/Category/Animal/${this.props.match.params.userName}`} className='logout-button'>Animals</Link>

                    <Link to={`/Category/Flower/${this.props.match.params.userName}`} className='logout-button'>Flowers</Link>

                    <Link to={`/Category/Food/${this.props.match.params.userName}`} className='logout-button'>Food</Link>

                    <Link to={`/Category/Car/${this.props.match.params.userName}`} className='logout-button'>Cars</Link>
                    
                </div>
            </div>

            <div className="fav-container header">
                <button  className='logout-button'>show all fav</button>
                <button  className='logout-button' >show all complete</button>
            </div>
        </div>
    )
    }
}

export default Dashboard;