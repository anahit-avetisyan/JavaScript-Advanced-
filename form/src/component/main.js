import React, {Component} from 'react';


class Main extends  Component  {
    state={
        name:"",
        userName:"",
        email:"",
        password:"",
        repassword:"",
    }
    nameChange=()=>{
        let regexpName =/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,6}$/;
        if(regexpName.test(this.name.value)==false){
            this.setState({name:"Please Input Right Format"})
        } 
        else{
            this.setState({name:""})
        }
    }
    userNameChange=()=>{
        let regexpUserName= /[A-Z][a-zA-Z]{1,6}$/;
        if(regexpUserName.test(this.userName.value)==false){
            this.setState({userName:"Please Input Right Format"})
        }
        else{
            this.setState({userName:""})
        }
    }
    mailChange=()=>{
        let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(mailformat.test(this.email.value)==false){
            this.setState({email:"Please Input Right Format"})
        } 
        else{
            this.setState({email:""})
        }
    } 
    passwordChange = () => {
        let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;   
        if(regpass.test(this.password.value)==false){
            this.setState({password:"Please input correct format"})
        }
            else{
                this.setState({password:""})
            }
            
        
    }
    repasswordChange=()=>{
        if(this.password.value!==this.repassword.value){
          this.setState({repassword:"That password does not match.Try again"})  
        }
        else{
            this.setState({repassword:""})
        }
    }

    myFunction=()=>{
        fetch("http://rest.learncode.academy/api/learncode/friends", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify()
        })

    }
          
    render(){
        return(
<React.Fragment>
<div className="divForSign">
                    <div id="signUpp" onClick={this.signUp}>Sign Up</div>
                <div id="signInn" onClick={this.signIn}>Sign In</div>
            </div>
            <div id="signUp">
                <span id="allelem"></span>
                <input  onChange={this.nameChange} type="text"   placeholder="Name" id="loginName" ref={input=>this.name=input} />
                <p>{this.state.name}</p>
                <input  onChange={this.userNameChange} type="text" placeholder="User Name" id="loginuserName" ref={input=>this.userName=input}/>
                <p>{this.state.userName}</p>
                <input onChange={this.mailChange} type="mail" placeholder="Your Email" id="loginEmail" ref={input=>this.email=input}/>
                <p>{this.state.email}</p>
                <input  onChange={this.passwordChange} type="password" placeholder="Password" id="loginPassword" ref={input=>this.password=input}/>
                <p>{this.state.password}</p>
                <input onChange={this.repasswordChange} type="password" placeholder="Repeat your password" id= "RepeatPassword" ref={input=>this.repassword=input}/>
                <p>{this.state.repassword}</p>
            </div>
            <div id="divForCheckbox">
                <input id="typeCheckbox" type="checkbox"/>
                <label for="typeCheckbox" className="labelForCheckbox">
                    I agree all statements in <a href="#">Terms of service</a>
                </label>
            </div>
            <button id="buttonOne" type="button" onClick={this.myFunction}>CREAT ACCOUNT</button>
            <button id="buttonTwo" type="button" onClick={this.myFunctionOne}>LOG IN</button>
            <p id="footer">Have already an account? <b><a href="#" target = "_blank"  > Login here </a> </b></p>
           
</React.Fragment>
        )

    }
}
export default Main;