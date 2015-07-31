import React, { Component } from 'react';

import styles from './Greeting.less';
import Icon from './Icon';

export default class Greeting extends Component {
  render() {
    return (
      <div className={styles.Greeting}>
        <Icon/>
        Hello, {this.props.name}!
      </div>
    );
  }
}
