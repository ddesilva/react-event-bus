import React, { useContext, useState } from 'react';
import withEvents from '../src/withEvents';
import EventContext from '../src/EventContext';

const ComponentThree = () => {
  const [state, setState] = useState({ someValue: '' });
  const EventBus = useContext(EventContext);

  EventBus.addEventListener('some-event-key', event => {
    setState({ someValue: event.detail.someValue });
  });

  return (
    <div className={'home-container'}>
      <p>Component Three: {state.someValue}</p>
    </div>
  );
};

export default withEvents(ComponentThree);
