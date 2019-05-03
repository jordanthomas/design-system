// @flow

import React, { type StatelessFunctionalComponent, type Node } from 'react';
import classNames from 'classnames';

import './Badge.scss';

type BadgeSize = 'mini';

type BadgeStatus = 'neutral' | 'positive' | 'negative';

export const Badge: StatelessFunctionalComponent<{
  size?: BadgeSize,
  status?: BadgeStatus,
  children?: Node,
  className?: string,
}> = ({ size, status, children, className, ...otherProps }) => {
  const badgeClasses = classNames(
    'badge',
    {
      [`badge--${size || ''}`]: !!size,
      [`badge--${status || ''}`]: !!status,
    },
    className,
  );

  return (
    <span className={badgeClasses} {...otherProps}>
      {children}
    </span>
  );
};
