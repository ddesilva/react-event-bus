import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './EventContext';
import EventTarget from './EventTarget';

class EventProvider extends Component {
  render() {
    const { children } = this.props;
    const eventTarget = EventTarget();
    return <Provider value={eventTarget}>{children}</Provider>;
  }
}

EventProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default EventProvider;
