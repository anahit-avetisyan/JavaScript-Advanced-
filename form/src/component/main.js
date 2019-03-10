import React, {Component} from 'react';


class Main extends  Component  {
    state={
        name:"",
        nameIn: "",
        userName:"",
        email:"",
        password:"",
        repassword:"",
        allfields:"",
        repasswordIn:"",
    }
    // signIn=()=>{
    // if({display:this.state.showStore="none"}){
    // this.setState({showStore:"flex"}) 
    // this.state.showStore=false
    // this.state.showsignUp=true;
    // this.state.buttonOne=true;
    // this.state.chekbox = true;
    // this.state.showsignIn=true;
    //     } 
    // }
    // signUp=()=>{
    // if({display:this.state.showStore="block"}){
    // this.setState({showStore:"none"}) 
    // this.state.showsignUp=false;
    // this.state.buttonOne=false;
    // this.state.chekbox = false;
    // this.state.showsignIn=false;
    //     }
    // }
    signIn=()=>{
        this.SignUp.style.display="none"
        this.SignIn.style.display="flex"  
        this.button1.style.display="none"
        this.button2.style.display="block"
        this.checkbox.style.display='none'
        this.checkbox1.style.display='none'
        this.signupstyle.style.borderBottom="none"
        this.signinstyle.style.borderBottom="2px solid #212F41"
    }
    signUp=()=>{
        this.SignUp.style.display="flex"
        this.SignIn.style.display="none" 
        this.button1.style.display="block"
        this.button2.style.display="none" 
        this.checkbox.style.display='flex'
        this.checkbox1.style.display='block'
        this.signupstyle.style.borderBottom="2px solid #212F41"
        this.signinstyle.style.borderBottom="none"
    }
    nameChangeIn=()=>{
        let regexpName =/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,6}$/;
        if(regexpName.test(this.nameIn.value)==false){
            this.setState({nameIn:"Please Input Right Format"})
        } 
        else{
            this.setState({nameIn:""})
        } 
    }
    passwordChangeIn = () => {
        let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;   
        if(regpass.test(this.passwordIn.value)==false){
            this.setState({passwordIn:"Please input correct format"})
        }
            else{
                this.setState({passwordIn:""})
            } 
    }
    
    myFunctionOne=()=>{
        if(this.nameIn.value&&this.passwordIn.value){
            let  data1={
                    name:this.nameIn.value,
                    password:this.passwordIn.value,    
                         }
    // console.log(data1)
        fetch("http://rest.learncode.academy/api/learncode/friends", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data1)
        })

    } 
    this.nameIn.value="";
    this.passwordIn.value="";
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
        if(this.name.value&&this.userName.value&&this.email.value&&this.password.value){
            let  data={
                name:this.name.value,
                userName:this.userName.value,
                email:this.email.value,
                password:this.password.value,    
            }
    console.log(data)
        fetch("http://rest.learncode.academy/api/learncode/friends", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

    }

    else{
        alert("Please fill all fileds")
        // this.setState({allfields:"Please fill all fileds"})
    } 
     this.name.value=""
     this.userName.value=""
     this.email.value=""
     this.password.value=""
     this.repassword.value=""   
}    
    render(){
        return(
<React.Fragment>
        <div className="divForSign">
            <div id="signUpp" onClick={this.signUp} ref={el=>this.signupstyle=el}>Sign Up</div>
            <div id="signInn" onClick={this.signIn} ref={el=>this.signinstyle=el}>Sign In</div>
        </div>
            <div id="signIn" style={{display: this.state.showsignIn ? 'flex' : 'none'}} ref={el=>this.SignIn=el}>
                <input  onChange={this.nameChangeIn}  type="text" placeholder="User Name" id="loginuserNameOne" ref={input=>this.nameIn=input}/>
                <p  >{this.state.nameIn}</p>
                <input onChange={this.passwordChangeIn}   type="password" placeholder="Password" id="loginPasswordOne" ref={input=>this.passwordIn=input}/>
                <p>{this.state.passwordIn}</p>
            </div>
                <div id="signUp" style={{display:this.state.showsignUp ? 'none' : 'flex'}} ref={el=>this.SignUp=el}>
                    <p>{this.state.allfields}</p>
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
                    <div id="divForCheckbox" style={{display:this.state.chekbox ? "none":"block"}} ref={checkbox=>this.checkbox=checkbox} >
                        <input id="typeCheckbox" type="checkbox"/>
                        <label for="typeCheckbox" className="labelForCheckbox" >
                            I agree all statements in <a href="#">Terms of service</a>
                        </label>
                    </div>
            <button ref={button=>this.button1=button}style={{display:this.state.buttonOne ? "none":"block"}} id="buttonOne" type="button" onClick={this.myFunction}>CREAT ACCOUNT</button>
            <button ref={button=>this.button2=button} style={{display: this.state.showStore ? 'block' : 'none' }} id="buttonTwo" type="button" onClick={this.myFunctionOne}>LOG IN</button>
            <p ref={checkbox=>this.checkbox1=checkbox} id="footer">Have already an account? <b><a href="#" target = "_blank"  > Login here </a> </b></p>
</React.Fragment>
        )
    }
}
export default Main;