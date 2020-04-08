import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../CSS/register.css'
import api from '../axios'
class  Register extends React.Component {

    state = {selectValue:'male',name:'',username:'',password:'',birthday:'',error:'',login:false,required:false}

 handleSelectState = (event) => {
    this.setState({selectValue: event.target.value});
    }

handleName = (event) => {
        this.setState({name: event.target.value});
        }
handleUserName = (event) => {
    this.setState({username: event.target.value});
    }
handlePassword = (event) => {
    this.setState({password: event.target.value});
    }
handleBirthday = (event) => {
    this.setState({birthday: event.target.value});
    }

    handleSignUp = () =>{

       
        if(this.state.username !== '' && this.state.password !== '')
        {
            api.post('/users',{

                name : this.state.name,
                user_name : this.state.username,
                gender:this.state.selectValue,
                birthday:this.state.birthday,
                password:this.state.password
            }).then(res=>{

                console.log(res.data)
                this.setState({error:'Successfully registered',login:true,required:false})
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
    console.log(this.state.birthday)
    if(this.state.login)
    {
        return <Redirect to={`/Login`}/>
    }
    return(

        <div className='div-container'>
            
            <h1>how to draw</h1>
            <p>step-by-step</p>

            <div className='sub-container' style={{marginTop:'-5px'}}>
               
               <p className='sign-header'> sign up</p>

                <div className='form'>
                   <div>
                        <label>Name:</label>
                        <input type='text' value={this.state.name} onChange={this.handleName}/>
                        
                   </div>
                
                   <div>
                        <label>User Name:</label>
                        <input type='text' value={this.state.username} onChange={this.handleUserName}/>
                   </div>
                   {!this.state.username&&this.state.required&&<div style={{marginLeft:'110px',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>User Name is Required</div>}
                   <div>
                        <label>Password:</label>
                        <input type='text' value={this.state.password} onChange={this.handlePassword}/>
                   </div>
                   {!this.state.password&&this.state.required&&<div style={{marginLeft:'100px',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>Password is Required</div>}
                   <div>
                        <label className='birthday'>Birthday:</label>
                        <input type='date' value={this.state.birthday} onChange={this.handleBirthday}/>
                   </div>
                   <div>
                        <label>Gender:</label>
                        <select value={this.state.selectValue} onChange={this.handleSelectState}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                   </div>

                   <button className='sign-button' onClick={this.handleSignUp}>Sign Up</button>

                   <Link to='/Login' className="link">Already have account ...</Link>

                    {this.state.error&&<div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>{this.state.error}</div>}
                </div>
            </div>
            
        </div>
    )
}
}

export default Register;