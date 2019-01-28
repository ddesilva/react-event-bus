import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withEvents from '../src/withEvents';

class ComponentOne extends Component {
  constructor(props) {
    super(props);
  }

  onChange = event => {
    const someEvent = new CustomEvent('some-event-key', {
      detail: { someValue: event.target.value }
    });
    this.props.EventBus.dispatchEvent(someEvent);
  };
  render() {
    return (
      <div className="home-container">
        Component One:
        <input onChange={this.onChange} />
      </div>
    );
  }
}

ComponentOne.propTypes = {
  EventBus: PropTypes.object
};

export default withEvents(ComponentOne);
