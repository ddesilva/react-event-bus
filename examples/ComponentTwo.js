import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withEvents from '../src/withEvents';

class ComponentTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someValue: ''
    };
    this.props.EventBus.addEventListener('some-event-key', event => {
      this.setState({ someValue: event.detail.someValue });
    });
  }

  render() {
    const someValue = this.state.someValue;
    return (
      <div className="home-container">
        <p>Component Two: {someValue}</p>
      </div>
    );
  }
}

ComponentTwo.propTypes = {
  EventBus: PropTypes.object
};

export default withEvents(ComponentTwo);
