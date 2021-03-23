import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class EventCard extends Component {

  render() {
    return (
      <div className="wedding">
    
        <h1>{this.props.event.name}</h1>
        <img src={this.props.event.image } alt={this.props.event.name } className="event-pic" />
        <p>{this.props.event.content }</p>
        <NavLink to="/NewEventForm"> <strong> Plan your next {this.props.event.name}</strong></NavLink>
        <br>
        </br>
      </div>
    )
  }
}