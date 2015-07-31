/** @jsx hJSX */
import {run} from '@cycle/core';
import {hJSX, makeDOMDriver} from '@cycle/dom';

function main(responses) {
  return {
    DOM: responses.DOM.get('.field', 'input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        <div>
          <label className="label">Name:</label>
          <input type="text" className="field"/>
          <hr/>
          <h1 className="header">Hello {name}</h1>
        </div>
      )
  };
}

run(main, {
  DOM: makeDOMDriver('.cycle')
});
