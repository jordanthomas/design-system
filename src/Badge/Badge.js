// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import type { Node } from 'react';

type BadgeSize =
  | 'mini'
  | 'wide'
  ;

type BadgeStyle =
  | 'success'
  | 'danger'
  | 'dark'
  ;

type Props = {
  badgeSize?: BadgeSize,
  badgeStyle?: BadgeStyle,
  children?: Node,
  className?: string,
};

class Badge extends Component<Props> {
  static defaultProps = {
    children: null,
  }

  render() {
    const {
      badgeSize,
      badgeStyle,
      children,
      className,
      ...otherProps
    } = this.props;

    const badgeClasses = classNames(
      'badge',
      {
        [`badge--${badgeSize || ''}`]: !!badgeSize,
        [`badge--${badgeStyle || ''}`]: !!badgeStyle,
      },
      className,
    );

    return (
      <span
        className={badgeClasses}
        {...otherProps}
      >
        {children}
      </span>
    );
  }
}

export default Badge;
