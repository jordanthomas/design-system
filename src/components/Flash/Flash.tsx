import * as React from 'react';
import classNames from 'classnames';

import './Flash.scss';

import { Icon } from '../Icon';

type Props = {
  flashStyle?: 'warn' | 'error' | 'success';
  heading?: string;
  showIcon?: boolean;
};

type FullProps = Props &
  Pick<
    React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>,
    'className'
  >;

export const Flash: React.FC<FullProps> = ({
  flashStyle,
  children,
  className,
  heading,
  showIcon,
  ...otherProps
}) => {
  const wrapperClasses = classNames(
    'flash',
    {
      [`flash--${flashStyle || ''}`]: !!flashStyle
    },
    className
  );

  const iconMap = {
    warn: 'info-outline',
    error: 'error-outline',
    success: 'success-outline',
    default: 'info-outline'
  };

  const flashIcon = (flashStyle && iconMap[flashStyle]) || iconMap.default;

  return (
    <div className={wrapperClasses} {...otherProps}>
      {showIcon && <Icon icon={flashIcon} className="flash__icon" />}
      <div className="flash__body">
        {heading && <h4 className="flash__heading">{heading}</h4>}
        {children}
      </div>
    </div>
  );
};

Flash.defaultProps = {
  showIcon: false
};
