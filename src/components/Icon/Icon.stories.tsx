import React from 'react';

import { Icon } from './Icon';
import { icons } from './icons';

const IconGridItem: React.FC<{ icon: string }> = ({ icon }) => (
  <div
    className="u-pull-left u-mr1 u-mb1 u-text-center"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid 2px #f5f5f5',
      borderRadius: '3px',
      width: '120px',
      height: '120px',
      fontSize: '0.7em'
    }}
  >
    <span>
      <Icon icon={icon} size={30} />
      <div className="u-mt2">
        <pre className="u-m0">{icon}</pre>
      </div>
    </span>
  </div>
);

const IconGrid: React.FC = () => {
  const iconGrid = Object.keys(icons).map(icon => (
    <IconGridItem key={icon} icon={icon} />
  ));

  return <div>{iconGrid}</div>;
};

export default {
  title: 'Components|Icon',
  component: Icon
};

export const allIcons = () => <IconGrid />;

allIcons.story = {
  name: 'all icons'
};
