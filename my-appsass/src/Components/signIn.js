import React,{Component} from 'react'
import PopUp from './popUp'
 

class SignIn extends Component{
    state={ 
        nameIn: "",
        repasswordIn:"",
        responseData: false,
        information:'',
        clicked:true,
        clicked1:false,
        massageText:''
    }
//     shouldComponentUpdate(nextProps,nextState){
//         if( nextState!==this.state.nameIn&&nextState!==this.state.passwordIn){
//        return true
//         }
//         return false
//    }
    // getSnapshotBeforeUpdate=(prevProps,prevState)=>{
    //     if(prevState.nameIn!== this.state.nameIn){
     
    //         console.log("Previous value is", prevState.nameIn, "value is" )
    //     }
    //     return null

    // }
    //  componentDidUpdate=(prevProps,prevState,snapshot)=>{
//  this.setState({nameIn:this.nameIn.value})
        // console.log("Previous value is", prevState, "next value is", this.response)
     
       
        // if(snapshot!== null){
        //     console.log(snapshot,"snapshot")
        // }
    // }
    nameChangeIn=()=>{
        let regexpName =/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,6}$/;
        if(regexpName.test(this.nameIn.value)===false){
            this.setState({nameIn:"Please Input Right Format"})
        } 
        else{
            this.setState({nameIn:""})
        } 
    }
    passwordChangeIn = () => {
        let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;   
        if(regpass.test(this.passwordIn.value)===false){
            this.setState({passwordIn:"Please input correct format"})
        }
            else{
                this.setState({passwordIn:""})
            } 
    }
    
    myFunctionOne=()=>{
        let  data1={
            name:this.nameIn.value,
            password:this.passwordIn.value,    
                 }
         
        if(this.nameIn.value && this.passwordIn.value){
           
    // console.log(data1)
    fetch("http://rest.learncode.academy/api/learncode/friends", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data1)
    })
    .then(response => response.json())
  .then((response) => {{this.setState({responseData: response})
}
 })

// .catch(error => console.error('Error:', error));
}
else{
    alert("Please fill all fileds Right Format")
    // this.setState({allfields:"Please fill all fileds"})
}


//   shouldComponentUpdate()

this.nameIn.value="";
this.passwordIn.value="";
this.setState({responseData: this.response})
// this.setState({clicked:false})
// this.setState({clicked1:true})
}
componentDidUpdate(prevProps, prevState){
    console.log(this.response)
    if (prevState.responseData !== this.state.responseData) {
        alert('Information received',this.response);
    }
}
shouldComponentUpdate(nextProps, nextState) {
    if (nextState!=="Anahit") {
        console.log('Information sent',nextState );
        return true;
    }else{
        return false;
    }
}
// massage = (text) => {
//     this.setState({massageText: text})
// }
// // ------------------------------

// writeData = () => {
//     // console.log(this.state.responseData);
//     let arr = [];
//     for (let key in this.state.responseData) {
//         arr.push(<PopUp  text = {this.state.responseData[key]} id = {key}/>)
//     }
//     return arr;
// }
// componentDidUpdate(prevProps, prevState){
//     if (prevState.responseData !== this.state.responseData) {
//         console.log('Information received');
//     }
// }
// shouldComponentUpdate(nextProps, nextState) {
//     if (!this.state.responseData) {
//         console.log(1);
//         this.massage('Information sent');
//         return true;
//     }else{
//         return false;
//     }
// }


    render(){

        return(
            <React.Fragment>
                           {/* {this.state.clicked? null:<div>
                            <p>{this.state.massageText}</p>
                        <ul>
                            {this.writeData()}
                        </ul>
                            </div>} */}
                            {this.state.clicked1? null: <div  id ="DivForSignIn" ref={el=>this.SignIn=el}>
            <form id="signIn">
            <h2>LOGIN</h2>
                <input  onChange={this.nameChangeIn}  type="text" placeholder="User Name" id="loginuserNameOne" ref={input=>this.nameIn=input}/>
                <p  >{this.state.nameIn}</p>
                <input onChange={this.passwordChangeIn}   type="password" placeholder="Password" id="loginPasswordOne" ref={input=>this.passwordIn=input}/>
                <p>{this.state.passwordIn}</p>
                <button ref={button=>this.button2=button}   id="buttonTwo" type="button" onClick={this.myFunctionOne}>LOG IN</button>
                </form>  
            </div>}
            
{/* <PopUp/> */}
</React.Fragment>
        )
        
        
    }
}
export default SignIn;