// @flow

import React, { type StatelessFunctionalComponent, type Node } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import './Badge.scss';

type BadgeSize = 'mini';

type BadgeStatus = 'neutral' | 'positive' | 'warning' | 'negative';

export const Badge: StatelessFunctionalComponent<{
  size?: BadgeSize,
  status?: BadgeStatus,
  children?: Node,
  className?: string,
  infoTooltip?: Node | string
}> = ({ size, status, children, className, infoTooltip, ...otherProps }) => {
  const badgeClasses = classNames(
    'badge',
    {
      [`badge--${size || ''}`]: !!size,
      [`badge--${status || ''}`]: !!status
    },
    className
  );

  return (
    <span className={badgeClasses} {...otherProps}>
      {children}
      {infoTooltip && (
        <Tooltip content={infoTooltip}>
          <Icon icon="info" className="badge__info-icon" />
        </Tooltip>
      )}
    </span>
  );
};
