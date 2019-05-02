// @flow

import React, { type StatelessFunctionalComponent } from 'react';
import classNames from 'classnames';

export const LoadingDots: StatelessFunctionalComponent<{
  className?: string
}> = ({ className, ...cleanedProps }) => {
  const dotsClasses = classNames('loading-dots', className);

  return (
    <span className={dotsClasses} {...cleanedProps}>
      <span className="loading-dots__dot" />
      <span className="loading-dots__dot" />
      <span className="loading-dots__dot" />
    </span>
  );
};
