import EventCard from './EventCard'
import SearchBar from './SearchBar'



function OurEvents(props) {
    return( 
    <div className ="event-options">
      <SearchBar theSearch={props.theSearch} />

    {
    props.events.map((event)=> { 
    return <EventCard event={event}
    />
    })

  }
  </div>
    )

}





  export default OurEvents;