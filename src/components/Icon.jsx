import React, { Component } from 'react';
import classnames from 'classnames';

import icon from '../assets/chevron-right.svg';
import styles from './Icon.less';

export default class Icon extends Component {
  render() {
    var cn = classnames(this.props.className, styles.Icon);
    return (
      <div
        className={cn}
        dangerouslySetInnerHTML={{__html: icon}} />
    );
  }
}
