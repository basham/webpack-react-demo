import React, { Component } from 'react';
import Button from 'iu-ess-ux-components/lib/Button';

import styles from './Greeting.less';
import Icon from './Icon';

export default class Greeting extends Component {
  render() {
    return (
      <div className={styles.Greeting}>
        <Icon className={styles['Greeting-icon']}/>
        Hello, {this.props.name}!
        <Button></Button>
      </div>
    );
  }
}
