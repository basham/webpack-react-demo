import React, { Component } from 'react';

import icon from '../assets/chevron-right.svg';
import styles from './Icon.less';

export default class Icon extends Component {
  render() {
    return (
      <div
        className={styles.Icon}
        dangerouslySetInnerHTML={{__html: icon}} />
    );
  }
}
