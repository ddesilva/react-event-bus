# react-event-bus
Cross component/app comms using a pub/sub pattern.

Good for:
- UI interactions / Updates
- Avoiding prop drilling
- Avoiding managing state yourself
- Communicating with 3rd party components
- Optimistic updates


```jsx

// Target is optional if you want to do cross app comms. Will either create or use target at window[target]
 <EventProvider target={'od_events'}>
  <ComponentOne />
  <ComponentTwo />
  <ComponentThree />
</EventProvider>
```

See /examples folder for working example.