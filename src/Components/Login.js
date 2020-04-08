import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'
import api from '../axios'
import {connect} from 'react-redux'

class Login extends React.Component {

    state = {username:'',password:'',error:'',redirect:false,required:false}

    
    handleUserName = (event) => {
        this.setState({username: event.target.value});
        }
    handlePassword = (event) => {
        this.setState({password: event.target.value});
        }
    handleLogin = () =>{

        
        if(this.state.name !== '' && this.state.username !== '' && this.state.password !== '')
        {

            api.post('/users/login',{

                
                user_name : this.state.username,
                password:this.state.password
            }).then(res=>{

                this.setState({redirect:true,required:false})
                console.log(res.data)
                
            }).catch(error=>{

                this.setState({error:'Invalid User Name or Password'})
                console.log(error)
            })
        }

        else
        {
            this.setState({error:'Please fill the required fields',required:true})
        }
    }

    render()
    {

        if(this.state.redirect)
        {
             return <Redirect to={`/Dashboard/${this.state.username}`}/>
        }
    return(

        <div className='div-container'>
            
            <h1>how to draw</h1>
            <p>step-by-step</p>

            <div className='sub-container'>
               
               <p className='sign-header'>Login</p>

                <div className='form' >
                   
                   <div>
                        <label style={{flex:1}}>User Name:</label>
                        <input type='text' style={{flex:1}} value={this.state.username} onChange={this.handleUserName}/>
                   </div>
                   {!this.state.username&&this.state.required&&<div style={{marginLeft:'100px',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>User Name is Required</div>}
                   <div>
                        <label>Password:</label>
                        <input type='text' style={{flex:1}} value={this.state.password} onChange={this.handlePassword}/>
                   </div>

                   {!this.state.password&&this.state.required&&<div style={{marginLeft:'100px',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>Password is Required</div>}

                   <button className='sign-button' style={{marginBottom:'-20px'}} onClick={this.handleLogin}>Login</button>
                   {this.state.error&&<div style={{marginTop:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>{this.state.error}</div>}
                </div>
            </div>
            
        </div>
    )
    }
}


export default (Login);