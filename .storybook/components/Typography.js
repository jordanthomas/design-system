import * as React from 'react';

type Props = {}

class Typography extends React.Component<Props> {
  render() {
    return (
      <div className="type-grid u-mt4">
        <div>
          <h4 className="u-mb4">Standard Scale</h4>
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
          <h4 className="u-mb4">Functional Scale</h4>
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
    );
  }
}

export default Typography;
