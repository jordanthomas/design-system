import * as React from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

import './Badge.scss';

type Props = {
  badgeSize?: 'mini';
  status?: 'neutral' | 'positive' | 'warning' | 'negative';
  infoTooltip?: React.ReactChild;
};

type FullProps = Props &
  Pick<
    React.DetailedHTMLProps<React.HTMLProps<HTMLSpanElement>, HTMLSpanElement>,
    'className'
  >;

export const Badge: React.FC<FullProps> = ({
  badgeSize,
  status,
  children,
  className,
  infoTooltip,
  ...otherProps
}) => {
  const badgeClasses = classNames(
    'badge',
    {
      [`badge--${badgeSize || ''}`]: !!badgeSize,
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
