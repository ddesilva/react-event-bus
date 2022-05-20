import React from 'react';
import { render } from 'react-dom';
import EventProvider from '../src/EventProvider';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const App = () => (
  <>
    <EventProvider target={'od_events'}>
      <h1>Contrived example - Provider 1</h1>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </EventProvider>

    <EventProvider target={'od_events'}>
      <h1>Contrived example - Provider 2</h1>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </EventProvider>

    <EventProvider>
      <h1>Contrived example - Isolated</h1>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </EventProvider>
  </>
);

render(<App />, document.getElementById('app'));
