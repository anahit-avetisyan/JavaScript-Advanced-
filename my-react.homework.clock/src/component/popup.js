import React, {Component} from 'react'
class Popup extends Component{
    state={
        click:false
    }
    closePopup=()=>{
        this.setState({click:true})
    }
    render(){
        return(
<React.Fragment>
            {this.state.click? null:  <div className='popup'>
         <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.closePopup}>close me</button>
        </div>
      </div>}
</React.Fragment> 

        )
    }
}
export default Popup