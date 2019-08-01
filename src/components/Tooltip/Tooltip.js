// @flow

import React, { type StatelessFunctionalComponent } from 'react';
import Tippy from '@tippy.js/react';

type Props = {};

export const Tooltip: StatelessFunctionalComponent<Props> = (props: Props) => {
  return (
    <Tippy arrow placement="right" flipBehavior={['right', 'top']} {...props} />
  );
};
