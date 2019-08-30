import * as React from 'react';
import Tippy from '@tippy.js/react';

type Props = React.ComponentProps<typeof Tippy>;

export const Tooltip: React.FC<Props> = ({ ...otherProps }) => {
  return (
    <Tippy
      arrow
      placement="right"
      flipBehavior={['right', 'top']}
      {...otherProps}
    />
  );
};
