import React from "react";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import OurEvents from "./components/OurEvents";
import HostProfile from './components/HostProfile';
import NewEventForm from './components/NewEventForm'
import NavBar from './components/NavBar'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component{

state = {
  events: [],
  user_events: [],
  searchText: ""

}

componentDidMount () {

  fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(eventData => this.setState({
      events: eventData
      
    }))
    console.log(this.state.events)

    fetch("http://localhost:3000/api/v1/user_events")
      .then(res => res.json())
      .then(ueventData => this.setState({
        user_events: ueventData
      }))
      
    }

    theSearch = (text) => {

      //console.log(text)
      this.setState({
        searchText: text
      })
        
    }
    //displayEvent = () => this.state.events.filter(event=> event.name.toLowerCase().includes(this.state.search.toLowerCase()))

  

    // removeEvents = (user_event) => {
    //   console.log(user_event)

    // }

    removeEvents = (user_event) => {
      //console.log(user_event, 'im deleted')
      fetch("http://localhost:3000/api/v1/user_events/" + user_event.id, {method: "DELETE"})
      .then(res => res.json)
      .then(() => { 
        this.setState({
          user_events: this.state.user_events.filter(upuser_event => upuser_event != user_event)
        })
      })
      
    }

    addToEvents = (user_event) => {
      console.log(user_event)
      //if(!this.state.user_events.includes(user_event))
      this.setState({
        user_events: [...this.state.user_events, user_event]
      })
    }

  

  render(){
    const filteredEvent = this.state.events.filter(events => events.name.toLowerCase().includes(this.state.searchText.toLowerCase()) )
    return (
    
     
      <Router>
       
      <NavBar/>
      

         {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}


     
         <Switch>

           <Route path="/about">
             <About/>
           </Route>

           <Route path="/OurEvents">
             <OurEvents theSearch = {this.theSearch} events = {filteredEvent}/>
           </Route>

           <Route path ="/HostProfile">
               <HostProfile addToEvents= {this.addToEvents} removeEvents = {this.removeEvents} user_events = {this.state.user_events}/>
               </Route> 

           
           <Route path="/"> 
           
           </Route>


         </Switch>
       
     </Router>

      
     
    );
          
  }

}


