import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Icon } from './Icon';
import IconREADME from './README.md';
import { icons } from './icons';

storiesOf('Components|Icon', module)
  .addParameters({ component: Icon })
  .addDecorator(withReadme(IconREADME))
  .add('all icons', () =>
    Object.keys(icons).map(key => (
      <div
        key={key}
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
          <Icon icon={key} size={30} />
          <div className="u-mt2">
            <pre className="u-m0">{key}</pre>
          </div>
        </span>
      </div>
    ))
  );
