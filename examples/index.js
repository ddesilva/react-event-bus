import React from "react";
import { render } from "react-dom";
import EventProvider from "../src/EventProvider";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

const App = () => (
  <EventProvider>
    <h1>Contrived example</h1>
    <ComponentOne />
    <ComponentTwo />
    <ComponentThree />
  </EventProvider>
);

render(<App />, document.getElementById("app"));
