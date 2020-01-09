import React,{Component} from 'react';
// import './Register.css'
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            username:""
        }
    }
    onUsernameChange=(event)=>{
        this.setState({username:event.target.value});
        
    }
    onEmailChange=(event)=>{
        this.setState({email:event.target.value});
        
    }
    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
        
    }
  /*   onPasswordConfirmChange=(event)=>{
        this.setState({password2:event.target.value});
        
    } */
    onRegister=(req,res)=>{
        fetch("http://localhost:3000/Register",
     {
     method:"post",
     headers:{"content-Type":"application/json"},
     body:JSON.stringify({
        username:this.state.username,
         email:this.state.email,
         password:this.state.password
                     })
      }
      )
     .then(response=>response.json())
     .then(user=>{
         if(user.id){
             this.props.loadUser(user);
             console.log(user);
            this.props.onRouteChange('home');
         }
          
    } ).catch(error=>res.status(400).json('cannot store empty data'))
       
    
}
    render(){
        //const {onRouteChange}=this.props
        return(
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">  
            <div className="measure centre">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onEmailChange} type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onUsernameChange} type="text" name="username"  id="username"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onPasswordChange} type="password" name="password"  id="password"/>
            </div>
            {/* <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password2">Confirm Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onPasswordConfrimChange} type="password" name="password"  id="password2"/>
            </div>
        */}
            </fieldset>
            <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onRegister}type="submit" value="Register"/>
            </div>
            
                </div>
                </main>
         </article> 
          );
    }
   
}
export default Register;