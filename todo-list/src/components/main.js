import React,{Component} from 'react';
 
class List extends Component{
  render(){
    return(
      <div className="mainDiv">
        <div>Game number</div>
        <div>Status</div>
        <div>Player 1</div>
        <div>Player 2</div>
        <div>Round</div>
        <div>Amount</div>
        <div>Time</div>
        <div>Action</div>
      </div>
    )
  }

}
export default List;