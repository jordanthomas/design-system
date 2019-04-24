// @flow

import React, { type StatelessFunctionalComponent, type Node } from 'react';
import classNames from 'classnames';

import './Badge.scss';

type BadgeSize =
  | 'mini'
  | 'wide'
  ;

type BadgeStyle =
  | 'success'
  | 'danger'
  | 'dark'
  ;

export const Badge: StatelessFunctionalComponent<{
  badgeSize?: BadgeSize,
  badgeStyle?: BadgeStyle,
  children?: Node,
  className?: string,
}> = ({
  badgeSize,
  badgeStyle,
  children,
  className,
  ...otherProps
}) => {
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
};
