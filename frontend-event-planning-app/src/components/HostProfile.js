import React from 'react';
import UEContainer from './UEContainer'
import NewEventForm from "./NewEventForm"


function HostProfile(props) {
    return( 
      
      <div id ="ue_container"  className = "row justify-content-center">
      <NewEventForm addToEvents={props.addToEvents} />

      <h1>Upcoming Events</h1>

    {
    props.user_events.map((user_event)=> { 
    return <UEContainer addToEvents= {props.addToEvents} removeEvents = {props.removeEvents} user_event={user_event}
    /> 
    })

  }
  </div>
    )

}

  export default HostProfile;