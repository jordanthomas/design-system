// @flow

import React, { type StatelessFunctionalComponent, createRef } from 'react';
import classNames from 'classnames';
import { icons } from './icons';

import './Icon.scss';

type Props = {|
  accessibilityLabel: string,
  className: string,
  icon: string,
  size: string,
  svgRef?: any
|};

const PureIcon: StatelessFunctionalComponent<Props> = ({
  accessibilityLabel,
  className,
  icon,
  size,
  svgRef = createRef()
}) => {
  const classes = classNames('icon', className);
  const svgSize = size || 24;
  const ariaHidden = accessibilityLabel === '' ? true : null;
  const path = icons[icon];

  return (
    <svg
      className={classes}
      viewBox="0 0 24 24"
      width={svgSize}
      height={svgSize}
      aria-hidden={ariaHidden}
      aria-label={accessibilityLabel}
      role="img"
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

// Flow upgrade needed for forwardRef Flow definition
// $FlowFixMe
export const Icon = React.forwardRef<Props, _>((props, ref) => {
  return <PureIcon {...props} svgRef={ref} />;
});
