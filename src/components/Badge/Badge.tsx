import * as React from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

import './Badge.scss';

type BadgeSize = 'mini';

type BadgeStatus = 'neutral' | 'positive' | 'warning' | 'negative';

type Props = {
  size?: BadgeSize;
  status?: BadgeStatus;
  children?: React.ReactNode;
  className?: string;
  infoTooltip?: React.ReactNode;
};

export const Badge: React.FC<Props> = ({
  size,
  status,
  children,
  className,
  infoTooltip,
  ...otherProps
}) => {
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
