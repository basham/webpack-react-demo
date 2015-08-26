import React from 'react';
import Greeting from './components/Greeting';

// Inject id from Webpack DefinePlugin globals.
let containerId = '#' + CONTAINER_ID;

React.render(
  <Greeting name="World"/>,
  document.body.querySelector(containerId)
);
