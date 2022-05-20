import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './EventContext';
import EventTarget from './EventTarget';

const getEventTarget = target => {
  if (target && target.length > 0) {
    if (!window[target]) {
      window[target] = EventTarget();
    }

    return window[target];
  }

  return EventTarget();
};

class EventProvider extends Component {
  render() {
    const { children, target } = this.props;
    const eventTarget = getEventTarget(target);
    return <Provider value={eventTarget}>{children}</Provider>;
  }
}

EventProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  target: PropTypes.string
};

export default EventProvider;
