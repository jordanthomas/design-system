import * as React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

type Props = React.ComponentProps<typeof Tippy>;

export const Tooltip: React.FC<Props> = ({ ...otherProps }) => {
  return (
    <Tippy
      arrow
      placement="right"
      flipBehavior={['right', 'top']}
      animation="shift-away"
      {...otherProps}
    />
  );
};
