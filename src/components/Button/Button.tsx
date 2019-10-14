/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';

import './Button.scss';

import { LoadingDots } from '../LoadingDots';

interface Props {
  buttonDisplay?: 'block' | 'icon-only' | 'icon-only-circle' | 'link';
  buttonSize?: 'extra-sm' | 'sm' | 'lg' | 'xl';
  buttonStyle?:
    | 'primary'
    | 'primary-important'
    | 'primary-contrast'
    | 'primary-danger'
    | 'primary-facebook'
    | 'secondary'
    | 'secondary-important'
    | 'secondary-danger'
    | 'text'
    | 'text-navigation'
    | 'link';
  inFlight?: boolean;
}

type FullProps = Props &
  Pick<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type' | 'className' | 'disabled' | 'onClick'
  >;

export const Button: React.FC<FullProps> = ({
  type,
  buttonDisplay,
  buttonSize,
  buttonStyle,
  children,
  className,
  disabled,
  inFlight,
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

Button.defaultProps = {
  type: 'button',
  inFlight: false
};
