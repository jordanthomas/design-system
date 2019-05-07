import React from 'react';

import { storiesOf } from '@storybook/react';

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
          <div className="palette-grouping__color palette-grouping__color--contrast palette-grouping__color--brand" style={{ backgroundColor: '#030102' }}>
            <div>$black</div>
            <div>#030102</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#292728' }}>
            <div>$gray-500</div>
            <div>#292728</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#747374' }}>
            <div>$gray-400</div>
            <div>#747374</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#a9a9a9' }}>
            <div>$gray-300</div>
            <div>#a9a9a9</div>
          </div>
          <div className="palette-grouping__color" style={{ backgroundColor: '#cfcfcf' }}>
            <div>$gray-200</div>
            <div>#cfcfcf</div>
          </div>
          <div className="palette-grouping__color" style={{ backgroundColor: '#f5f5f5' }}>
            <div>$gray-100</div>
            <div>#f5f5f5</div>
          </div>
        </div>

        <div className="palette-grouping">
          <div className="palette-grouping__color palette-grouping__color--contrast palette-grouping__color--brand" style={{ backgroundColor: '#d6a461' }}>
            <div>$gold-300</div>
            <div>#d6a461</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--brand" style={{ backgroundColor: '#faf6ed' }}>
            <div>$gold-100</div>
            <div>#faf6ed</div>
          </div>
        </div>

        <div className="palette-grouping">
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#003a49' }}>
            <div>$teal-500</div>
            <div>#003a49</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#387483' }}>
            <div>$teal-300</div>
            <div>#387483</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--brand" style={{ backgroundColor: '#a8d7dd' }}>
            <div>$teal-100</div>
            <div>#a8d7dd</div>
          </div>
        </div>

        <div className="palette-grouping">
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#364919' }}>
            <div>$green-500</div>
            <div>#364919</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--contrast palette-grouping__color--brand" style={{ backgroundColor: '#718d50' }}>
            <div>$green-300</div>
            <div>#718d50</div>
          </div>
          <div className="palette-grouping__color" style={{ backgroundColor: '#aebf94' }}>
            <div>$green-100</div>
            <div>#aebf94</div>
          </div>
        </div>

        <div className="palette-grouping">
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#856100' }}>
            <div>$yellow-500</div>
            <div>#856100</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--brand" style={{ backgroundColor: '#edcb3a' }}>
            <div>$yellow-300</div>
            <div>#edcb3a</div>
          </div>
          <div className="palette-grouping__color" style={{ backgroundColor: '#ffe473' }}>
            <div>$yellow-100</div>
            <div>#ffe473</div>
          </div>
        </div>

        <div className="palette-grouping">
          <div className="palette-grouping__color palette-grouping__color--contrast" style={{ backgroundColor: '#91271f' }}>
            <div>$red-500</div>
            <div>#91271f</div>
          </div>
          <div className="palette-grouping__color palette-grouping__color--brand" style={{ backgroundColor: '#e05d48' }}>
            <div>$red-300</div>
            <div>#e05d48</div>
          </div>
          <div className="palette-grouping__color" style={{ backgroundColor: '#ea9a92' }}>
            <div>$red-100</div>
            <div>#ea9a92</div>
          </div>
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
