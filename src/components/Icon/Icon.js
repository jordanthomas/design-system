// @flow

import React, { type StatelessFunctionalComponent, createRef } from 'react';
import classNames from 'classnames';
import svgs from './svgs';

import './Icon.scss';

type Props = {|
  accessibilityLabel: string,
  className: string,
  icon: string,
  size: string,
  svgRef?: any,
|}

const PureIcon: StatelessFunctionalComponent<Props> = ({
  accessibilityLabel,
  className,
  icon,
  size,
  svgRef = createRef(),
}) => {
  const classes = classNames(
    'icon',
    className,
  );
  const svgSize = size || 24;
  const ariaHidden = accessibilityLabel === '' ? true : null;
  const path = svgs[icon];

  return (
    <svg
      className={classes}
      viewBox="0 0 24 24"
      width={svgSize}
      height={svgSize}
      aria-hidden={ariaHidden}
      aria-label={accessibilityLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: path }} // eslint-disable-line react/no-danger
      ref={svgRef}
    />
  );
};

// Flow upgrade needed for forwardRef Flow definition
// $FlowFixMe
export const Icon = React.forwardRef<Props, _>((props, ref) => {
  return <PureIcon {...props} svgRef={ref} />;
});