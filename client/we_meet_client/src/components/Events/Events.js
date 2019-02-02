import React, { Component } from 'react';
import axios from "axios";
import Auth from '../../services/Auth'

import { ErrorText, FillButton, List, Text } from 'tailwind-react-ui';


class Events extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [],  credentials: {} };
  }

  componentDidMount() {
    this.getEvents()
  }

  componentWillMount() {
    this.setState({ credentials: this.getCredentials() })
  }

  async getEvents() {
    const response = await axios.get("http://localhost:3000/events")
    const events = response.data.events
    this.setState({ events });
  }

  async getCredentials() {
    let credentials = await Auth.getUser()
    return credentials
  }


  render() {
    let responseMessage
    if (this.props.responseMessage) {
      responseMessage = <ErrorText>{this.props.responseMessage}</ErrorText>
    }

    const events = (
      <List fullWidth>
        {this.state.events.map(event =>
          <React.Fragment key={event.id}>
            <Text >{event.title}</Text>
            <FillButton
              brand='secondary'
              small
              id={`attend-event-${event.id}`}
              onClick={this.props.rsvpHandler}
            >
              RSVP
            </FillButton>
          </React.Fragment>
        )}
      </List>
    )

    return (
      <div>
        {responseMessage}
        <h3>Events List</h3>
        <ul>
          {events}
        </ul>
      </div>
    )
  }
}

export default Events;