import React from "react";
class Adddqestions extends React.Component{
  state={
    feel:"",
    text:"",
    date:""
  };

  add=(e)=>{
    e.preventDefault();
    if(this.state.feel==="" || this.state.text==="" && this.state.date===""){
      alert("Please enter the values ");
      return;
    }
    this.props.addfeelingsHandler(this.state);
    this.setState({feel:"",text:"",date:""});
    console.log(this.state);
  }
render(){
    return(
    <div className="container2">
    <form className="form" onSubmit={this.add}>
    <div className="questions">
      <label><p>Choose Date:
      <input type="date" id="dates" className="text2" value={this.state.date} onChange={(e)=>this.setState({date:e.target.value})}></input></p></label>
      <label>Express how do you feel in one word</label>
      <input type="text" name="feel" className="text2" value={this.state.feel} onChange={(e)=> this.setState({feel:e.target.value})}></input>
    <div>
      <label>How did your day go:</label><br/>
      <textarea name="text" className="area"
       value={this.state.text}
       onChange={(e)=> this.setState({text:e.target.value})}
       />
    </div>
    </div>
    <center><button type="submit" className="submitbutton">Add</button></center>
  </form>
  </div>
)
};
}
export default Adddqestions;