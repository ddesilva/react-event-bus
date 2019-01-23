import { createContext } from 'react';

const EventBusContext = createContext({});
const Provider = EventBusContext.Provider;
const Consumer = EventBusContext.Consumer;

export { Provider };
export { Consumer };
export default EventBusContext;
