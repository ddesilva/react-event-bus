import React, { Component } from 'react';
import EventConsumer from './EventConsumer';

function withEvents(WrappedComponent) {
  class WithEvents extends Component {
    render() {
      return (
        <EventConsumer>
          {EventBus => <WrappedComponent EventBus={EventBus} {...this.props} />}
        </EventConsumer>
      );
    }
  }

  return WithEvents;
}

export default withEvents;
