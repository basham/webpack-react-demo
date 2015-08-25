import React from 'react';
import Greeting from './components/Greeting';

let rootInstance = React.render(
  <Greeting name="World"/>,
  document.body.querySelector('#app')
);

if(module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
