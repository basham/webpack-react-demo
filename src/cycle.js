import {run} from '@cycle/core';
import {h, makeDOMDriver} from '@cycle/dom';

function main(responses) {
  return {
    DOM: responses.DOM.get('.field', 'input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        h('div', [
          h('label.label', 'Name:'),
          h('input.field', {attributes: {type: 'text'}}),
          h('hr'),
          h('h1.header', 'Hello ' + name)
        ])
      )
  };
}

run(main, {
  DOM: makeDOMDriver('.cycle')
});
