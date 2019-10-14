import * as React from 'react';
import classNames from 'classnames';
import { icons } from './icons';

import './Icon.scss';

interface Props {
  accessibilityLabel?: string;
  icon: string;
  size?: string | number;
  svgRef?: any;
}

type FullProps = Props &
  Pick<
    React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement>,
    'className'
  >;

const PureIcon: React.FC<FullProps> = ({
  accessibilityLabel,
  className,
  icon,
  size,
  svgRef = React.createRef()
}) => {
  const classes = classNames('icon', className);
  const ariaHidden = accessibilityLabel === '' ? true : null;
  const path = icons[icon];

  return (
    <svg
      className={classes}
      viewBox="0 0 24 24"
      width={size}
      height={size}
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

PureIcon.defaultProps = {
  size: 24
};

export const Icon = React.forwardRef<SVGSVGElement, FullProps>((props, ref) => {
  return <PureIcon {...props} svgRef={ref} />;
});
