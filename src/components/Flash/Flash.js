// @flow

import React, { type StatelessFunctionalComponent, type Node } from 'react';
import classNames from 'classnames';

import './Flash.scss';

import { Icon } from '../Icon';

type FlashStyle = 'warn' | 'error' | 'success';

export const Flash: StatelessFunctionalComponent<{
  flashStyle?: FlashStyle,
  children?: Node,
  className?: string,
  heading?: string,
  showIcon?: boolean
}> = ({
  flashStyle,
  children,
  className,
  heading,
  showIcon = false,
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
