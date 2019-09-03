import * as React from 'react';
import ColorBlock from './ColorBlock';

type Props = {}

class Color extends React.Component<Props> {
  render() {
    return (
      <div className="pallete-grid u-my4">
        <div className="palette-grouping">

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
    );
  }
}

export default Color;
