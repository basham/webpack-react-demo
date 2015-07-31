import React, { Component } from 'react';

import styles from './Greeting.less';

export default class Greeting extends Component {
  render() {
    return (
      <div className={styles.Greeting}>
        Hello, {this.props.name}!
      </div>
    );
  }
}
