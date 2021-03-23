import React, { Component } from 'react';


 class UEContainer extends Component {

  state = {
    location: "",
    venue: "",
    date: "",
    time: "",
    event:"",
    id: null,
    
    isInEditMode: false
  }




 

  handleEdit(e, id){
   
    console.log(e)

    let editUpcomingEvents = {
      location: this.state.location,
      venue: this.state.date,
      date: this.state.date,
      time: this.state.time,
      event_id: 1,
      user_id: 1
      
      
  }

  
  //console.log(newProgressForm)

  let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "PATCH"
    reqObj.body = JSON.stringify(editUpcomingEvents)
    console.log(reqObj)
  

  fetch(`http://localhost:3000/api/v1/user_events/${id}`, reqObj)
  .then(res => res.json())
  .then(editUpEvents =>
    this.props.addToEvents(editUpEvents))
    e.target.reset()
  }

    render(){
  
      return this.state.isInEditMode ?
      <div>
      <input 
        type="text"
        defaultValue={this.state.value}/>
        </div>:

      <div className="card">
        <div>
        {/* <h2>Location: {this.props.user_event.user.name}</h2> */}
        <h2>Location: {this.props.user_event.location}</h2>
        <h2  >Venue: {this.props.user_event.venue}</h2>
        <h2 >Date:{this.props.user_event.date}</h2>
        <h2 >Time: {this.props.user_event.time}</h2>
        </div>
        <div>
        <button onClick = {() => this.props.removeEvents(this.props.user_event)}>Remove Event</button>
        <br/>
        <button onClick = {() => this.handleEdit(this.props.user_event)}>Edit Event</button>
        
        </div>
      </div>

    }
  }
    
export default UEContainer