// @flow

import React, { type StatelessFunctionalComponent, type Node } from 'react';
import classNames from 'classnames';
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
          <svg className="badge__info-icon" viewBox="0 0 24 24">
            <path d="M12,2.21428571 C6.57142857,2.21428571 2.21428571,6.57142857 2.21428571,12 C2.21428571,17.4285714 6.57142857,21.7857143 12,21.7857143 C17.4285714,21.7857143 21.7857143,17.4285714 21.7857143,12 C21.7857143,6.57142857 17.4285714,2.21428571 12,2.21428571 Z M11.9285714,4.92857143 C13,4.92857143 13.7142857,5.78571429 13.7142857,6.64285714 C13.7142857,7.5 13.0714286,8.35714286 11.9285714,8.35714286 C10.8571429,8.35714286 10.2142857,7.5 10.2142857,6.64285714 C10.2142857,5.78571429 10.8571429,4.92857143 11.9285714,4.92857143 Z M9.42857143,19.0714286 L9.5,18.7142857 L9.78571429,18.7142857 C10.3571429,18.6428571 10.5714286,18.6428571 10.5714286,18.3571429 L10.5714286,13.0714286 C10.5714286,11.7857143 10.4285714,11.6428571 9.71428571,11.4285714 L9.28571429,11.3571429 L9.28571429,11.0714286 L13.4285714,9.92857143 L13.4285714,18.4285714 C13.4285714,18.6428571 13.5714286,18.6428571 14.4285714,18.7857143 L14.6428571,18.7857143 L14.7142857,19.1428571 L9.42857143,19.1428571 L9.42857143,19.0714286 Z" />
          </svg>
        </Tooltip>
      )}
    </span>
  );
};
