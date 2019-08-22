import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorBlock from './components/ColorBlock';

storiesOf('Base|Foundation', module)
  .add('Home', () => <h1>EBTH Design System</h1>)
  .add('Color', () => (
    <>
      <h1>Color Palette</h1>

      <div className="pallete-grid u-my4">
        <div className="palette-grouping">
          <ColorBlock variable="$black" hex="#030102" needsContrast isBrand />
          <ColorBlock variable="$gray-500" hex="#292728" needsContrast />
          <ColorBlock variable="$gray-400" hex="#747374" needsContrast />
          <ColorBlock variable="$gray-300" hex="#a9a9a9" needsContrast />
          <ColorBlock variable="$gray-200" hex="#cfcfcf" />
          <ColorBlock variable="$gray-100" hex="#f5f5f5" />
        </div>

        <div className="palette-grouping">
          <ColorBlock
            variable="$gold-300"
            hex="#d6a461"
            needsContrast
            isBrand
          />
          <ColorBlock variable="$gold-100" hex="#faf6ed" isBrand />
        </div>

        <div className="palette-grouping">
          <ColorBlock variable="$teal-500" hex="#003a49" needsContrast />
          <ColorBlock variable="$teal-300" hex="#387483" needsContrast />
          <ColorBlock variable="$teal-100" hex="#a8d7dd" isBrand />
        </div>

        <div className="palette-grouping">
          <ColorBlock variable="$green-500" hex="#364919" needsContrast />
          <ColorBlock
            variable="$green-300"
            hex="#718d50"
            needsContrast
            isBrand
          />
          <ColorBlock variable="$green-100" hex="#aebf94" />
        </div>

        <div className="palette-grouping">
          <ColorBlock variable="$yellow-500" hex="#856100" needsContrast />
          <ColorBlock variable="$yellow-300" hex="#edcb3a" isBrand />
          <ColorBlock variable="$yellow-100" hex="#ffe473" />
        </div>

        <div className="palette-grouping">
          <ColorBlock variable="$red-500" hex="#91271f" needsContrast />
          <ColorBlock variable="$red-300" hex="#e05d48" isBrand />
          <ColorBlock variable="$red-100" hex="#ea9a92" />
        </div>
      </div>

      <h2>Accessibility</h2>
      <p>TK</p>
    </>
  ))
  .add('Typography', () => (
    <>
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
          <h6 className="u-mb4">h6: Aktiv</h6>

          <div className="u-mb4">
            <p className="body--large-bold">Body Large: Aktiv 600 18/25</p>
            <p className="body--large">Body Large: Aktiv 400 18/25</p>
            <p className="body--large-italic">
              Body Large: Aktiv 400 Italic 18/25
            </p>
          </div>
          <div className="u-mb4">
            <p className="body--regular-bold">Body Regular: Aktiv 600 16/22</p>
            <p className="body--regular">Body Regular: Aktiv 400 16/22</p>
            <p className="body--regular-italic">
              Body Regular: Aktiv 400 Italic 16/22
            </p>
          </div>
          <div className="u-mb4">
            <p className="body--small-bold">Body Small: Aktiv 600 14/20</p>
            <p className="body--small">Body Small: Aktiv 400 14/20</p>
            <p className="body--small-italic">
              Body Small: Aktiv 400 Italic 14/20
            </p>
          </div>
        </div>
        <div>
          <h2 className="u-mb4">Functional Scale (item detail pages)</h2>
          <hr />

          <h1 className="u-mb2">H1: Aktiv</h1>
          <h2 className="u-mb2">H2: Bebas</h2>
          <h3 className="u-mb2">H3: Aktiv</h3>
          <h4 className="u-mb4">H4: Aktiv</h4>
          <h5 className="u-mb4">H5: Aktiv</h5>
          <h6 className="u-mb4">h6: Aktiv</h6>

          <div className="u-mb4">
            <p className="body--large-bold">Body Large: Aktiv 600 18/25</p>
            <p className="body--large">Body Large: Aktiv 400 18/25</p>
            <p className="body--large-italic">
              Body Large: Aktiv 400 Italic 18/25
            </p>
          </div>
          <div className="u-mb4">
            <p className="body--regular-bold">Body Regular: Aktiv 600 16/22</p>
            <p className="body--regular">Body Regular: Aktiv 400 16/22</p>
            <p className="body--regular-italic">
              Body Regular: Aktiv 400 Italic 16/22
            </p>
          </div>
          <div className="u-mb4">
            <p className="body--small-bold">Body Small: Aktiv 600 14/20</p>
            <p className="body--small">Body Small: Aktiv 400 14/20</p>
            <p className="body--small-italic">
              Body Small: Aktiv 400 Italic 14/20
            </p>
          </div>
        </div>
      </div>
    </>
  ));
