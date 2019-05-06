// @flow
/* eslint-disable react/button-has-type */

import React, { type StatelessFunctionalComponent, type Node } from 'react';
import classNames from 'classnames';

import './Button.scss';

import { LoadingDots } from '../LoadingDots';

type ButtonDisplay = 'block' | 'icon-only' | 'icon-only-circle';

type ButtonSize = 'extra-sm' | 'sm' | 'lg' | 'xl';

type ButtonStyle =
  | 'primary'
  | 'primary-important'
  | 'primary-contrast'
  | 'primary-danger'
  | 'primary-light'
  | 'secondary'
  | 'secondary-important'
  | 'secondary-danger'
  | 'link'
  | 'navigation';

export const Button: StatelessFunctionalComponent<{
  buttonDisplay?: ButtonDisplay,
  buttonSize?: ButtonSize,
  buttonStyle?: ButtonStyle,
  children?: Node,
  className?: string,
  disabled?: boolean,
  inFlight?: boolean,
  type?: 'button' | 'submit' | 'reset'
}> = ({
  buttonDisplay,
  buttonSize,
  buttonStyle,
  children,
  className,
  disabled,
  inFlight = false,
  type = 'button',
  ...otherProps
}) => {
  const isDisabled = disabled || inFlight;

  const buttonClasses = classNames(
    'btn',
    {
      [`btn--${buttonDisplay || ''}`]: !!buttonDisplay,
      [`btn--${buttonSize || ''}`]: !!buttonSize,
      [`btn--${buttonStyle || ''}`]: !!buttonStyle
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      {...otherProps}
    >
      {inFlight && <LoadingDots />}
      {!inFlight && children}
    </button>
  );
};
