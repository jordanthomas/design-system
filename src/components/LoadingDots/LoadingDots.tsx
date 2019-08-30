import * as React from 'react';
import classNames from 'classnames';

import './LoadingDots.scss';

type Props = {};

type FullProps = Props &
  Pick<
    React.DetailedHTMLProps<React.HTMLProps<HTMLSpanElement>, HTMLSpanElement>,
    'className'
  >;

export const LoadingDots: React.FC<FullProps> = ({
  className,
  ...otherProps
}) => {
  const dotsClasses = classNames('loading-dots', className);

  return (
    <span className={dotsClasses} {...otherProps}>
      <span className="loading-dots__dot" />
      <span className="loading-dots__dot" />
      <span className="loading-dots__dot" />
    </span>
  );
};
