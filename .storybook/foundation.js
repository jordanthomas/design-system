import React from 'react';
import classNames from 'classnames';

import { storiesOf } from '@storybook/react';

function renderColor(variable, hex, contrast: false, brand: false) {
  const colorClasses = classNames(
    'palette-grouping__color',
    {
      'palette-grouping__color--contrast': contrast,
      'palette-grouping__color--brand': brand,
    },
  );

  return (
    <div className={colorClasses} style={{ backgroundColor: hex }}>
      <div>{variable}</div>
      <div>{hex}</div>
    </div>
  );
}

storiesOf('Foundation', module)
  .add('Home', () => (
    <div className="u-p8">
      <h1>EBTH Design System</h1>
    </div>
  ))
  .add('Color', () => (
    <div className="u-p8">
      <h1>Color Palette</h1>

      <div className="pallete-grid u-my4">

        <div className="palette-grouping">
          {renderColor('$black',    '#030102', true, true)}
          {renderColor('$gray-500', '#292728', true)}
          {renderColor('$gray-400', '#747374', true)}
          {renderColor('$gray-300', '#a9a9a9', true)}
          {renderColor('$gray-200', '#cfcfcf')}
          {renderColor('$gray-100', '#f5f5f5')}
        </div>

        <div className="palette-grouping">
          {renderColor('$gold-300', '#d6a461', true, true)}
          {renderColor('$gold-100', '#faf6ed', false, true)}
        </div>

        <div className="palette-grouping">
          {renderColor('$teal-500', '#003a49', true)}
          {renderColor('$teal-300', '#387483', true)}
          {renderColor('$teal-100', '#a8d7dd', false, true)}
        </div>

        <div className="palette-grouping">
          {renderColor('$green-500', '#364919', true)}
          {renderColor('$green-300', '#718d50', true, true)}
          {renderColor('$green-100', '#aebf94')}
        </div>

        <div className="palette-grouping">
          {renderColor('$yellow-500', '#856100', true)}
          {renderColor('$yellow-300', '#edcb3a', false, true)}
          {renderColor('$yellow-100', '#ffe473')}
        </div>

        <div className="palette-grouping">
          {renderColor('$red-500', '#91271f', true)}
          {renderColor('$red-300', '#e05d48', false, true)}
          {renderColor('$red-100', '#ea9a92')}
        </div>

      </div>

      <h2>Accessibility</h2>
      <p>TK</p>
    </div>
  ))
  .add('Typography', () => (
    <div className="u-p8">
      <h1 className="u-mb4">Typography</h1>

      <div className="type-grid">
        <div>
          <h2 className="u-mb4">Standard Scale</h2>
          <hr />

          <h1 className="u-mb2">H1: Bebas</h1>
          <h2 className="u-mb2">H2: Aktiv</h2>
          <h3 className="u-mb2">H3: Aktiv</h3>
          <h4 className="u-mb2">H4: Bebas</h4>
          <h5 className="u-mb4">H5: Aktiv</h5>

          <div className="u-mb4">
            <p className="body--large-bold">Body Large: Aktiv 600 18/25</p>
            <p className="body--large">Body Large: Aktiv 400 18/25</p>
            <p className="body--large-italic">Body Large: Aktiv 400 Italic 18/25</p>
          </div>
          <div className="u-mb4">
            <p className="body--regular-bold">Body Regular: Aktiv 600 16/22</p>
            <p className="body--regular">Body Regular: Aktiv 400 16/22</p>
            <p className="body--regular-italic">Body Regular: Aktiv 400 Italic 16/22</p>
          </div>
          <div className="u-mb4">
            <p className="body--small-bold">Body Small: Aktiv 600 14/20</p>
            <p className="body--small">Body Small: Aktiv 400 14/20</p>
            <p className="body--small-italic">Body Small: Aktiv 400 Italic 14/20</p>
          </div>
        </div>
        <div>
          <h2 className="u-mb4">Functional Scale (item detail pages)</h2>
          <hr />

          <h1 className="u-mb2">H1: Aktiv</h1>
          <h2 className="u-mb2">H2: Bebas</h2>
          <h3 className="u-mb2">H3: Aktiv</h3>
          <h4 className="u-mb4">H4: Aktiv</h4>

          <div className="u-mb4">
            <p className="body--large-bold">Body Large: Aktiv 600 18/25</p>
            <p className="body--large">Body Large: Aktiv 400 18/25</p>
            <p className="body--large-italic">Body Large: Aktiv 400 Italic 18/25</p>
          </div>
          <div className="u-mb4">
            <p className="body--regular-bold">Body Regular: Aktiv 600 16/22</p>
            <p className="body--regular">Body Regular: Aktiv 400 16/22</p>
            <p className="body--regular-italic">Body Regular: Aktiv 400 Italic 16/22</p>
          </div>
          <div className="u-mb4">
            <p className="body--small-bold">Body Small: Aktiv 600 14/20</p>
            <p className="body--small">Body Small: Aktiv 400 14/20</p>
            <p className="body--small-italic">Body Small: Aktiv 400 Italic 14/20</p>
          </div>
        </div>
      </div>

    </div>
  ));
