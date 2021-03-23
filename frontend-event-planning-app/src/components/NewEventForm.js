import React, { Component } from 'react';

class NewEventForm extends Component {

  state={
    user_events: "",
    location: "",
    venue: "",
    date: "",
    time: "",
    event: ""
    
  }

  addToEvents = (user_event) => {
    console.log(user_event)
    //if(!this.state.user_events.includes(user_event))
    this.setState({
      user_events: [...this.state.user_events, user_event]
    })
  }

  handleEdit(e, id){
       
    console.log(e)

    let editUserEvents = {
      location: this.state.location,
      venue: this.state.venue,
      date: this.state.date,
      time: this.state.time,
      event_id: 1,
      user_id: 1
  }

  
  //console.log(newProgressForm)

  let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "PATCH"
    reqObj.body = JSON.stringify(editUserEvents)
    console.log(reqObj)
  

  fetch(`http://localhost:3000/api/v1/user_events/${id}`, reqObj)
  .then(res => res.json())
  .then(editUserEvents =>
    this.props.addToProgressForm(editUserEvents))
    e.target.reset()
  }


  handleSubmit(e){
    e.preventDefault()
    //console.log(this.state)
    let newEvent = {
      location: this.state.location,
      venue: this.state.venue,
      date: this.state.date,
      time: this.state.time,

      user_id: 1
  }
  //console.log(newEvent)

  let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify(newEvent)
    console.log(reqObj)
  

  fetch('http://localhost:3000/api/v1/user_events', reqObj)
  .then(res => res.json())
  .then(newEvent =>
    this.addToEvents(newEvent))
    e.target.reset()
    
  }

  


  render() {
    return (
     
        <div className="add-newEvent-form"  >
          <h1>New Event Form</h1>
      <form onSubmit={(e) => this.handleSubmit(e)} className= "row justify-content-center" >
         
          <input onChange = {(e)=> this.setState({location: e.target.value})} type="text" name="location" placeholder="Enter Event City Location..." className="input-text"/>
          <br/>
          <input onChange = {(e)=> this.setState({venue: e.target.value})} type="text" name="venue" placeholder="Enter Event Venue..." className="input-text"/>
          <br/>
          <input onChange = {(e)=> this.setState({date: e.target.value})}type="text" name="date" placeholder="Enter Event Date..." className="input-text"/>
          <br/>
          <input onChange = {(e)=> this.setState({time: e.target.value})} type="text" name="time" placeholder="Enter Event Time..." className="input-text"/>
          <br/>
          {/* <input onChange = {(e)=> this.setState({event_id: e.target.value})} type="text" name="event_id" placeholder="Enter Event..." className="input-text"/> */}
          {/* <br/> */}
          {/* <input onChange = {(e)=> this.setState({user_id: e.target.value})} type="text" name="event_id" placeholder="Enter Event..." className="input-text"/> */}
          {/* <br/> */}
          <input type="submit" name="submit" value="Create New Event" className="submit"/>
          
        </form>
        </div>
     
    );
  }
}

export default NewEventForm