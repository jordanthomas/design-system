// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type Props = {
  variable: string,
  hex: string,
  needsContrast?: boolean,
  isBrand?: boolean,
}

type State = {
  copied: boolean,
}

class ColorBlock extends Component<Props, State> {
  state = {
    copied: false,
  }

  onCopy = () => {
    this.setState({ copied: true });
  }

  handleMouseLeave = () => {
    this.setState({ copied: false });
  }

  render() {
    const { variable, hex, needsContrast, isBrand } = this.props;
    const colorClasses = classNames(
      'color-block',
      {
        'color-block--contrast': !!needsContrast,
        'color-block--brand': !!isBrand,
      },
    );
    const overlayText = this.state.copied ? 'Copied!' : 'Click to copy hex';

    return (
      <CopyToClipboard text={hex} onCopy={this.onCopy} onMouseLeave={this.handleMouseLeave}>
        <div className={colorClasses} style={{ backgroundColor: hex }}>
          <div>{variable}</div>
          <div>{hex}</div>
          <div className="color-block__overlay" style={{ backgroundColor: hex }}>{overlayText}</div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBlock;
