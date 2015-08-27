import React from 'react';
import Greeting from './components/Greeting';

React.render(
  <Greeting name="World"/>,
  // Inject id from Webpack DefinePlugin globals.
  document.getElementById(CONTAINER_ID)
);
