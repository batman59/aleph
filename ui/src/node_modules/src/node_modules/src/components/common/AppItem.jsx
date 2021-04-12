import React, { PureComponent } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { selectMetadata } from 'selectors';

class AppItem extends PureComponent {
    render() {
      const { app } = this.props;
      if (!app) {
        return null;
      }
      const message = (
        <FormattedMessage
          id="footer.aleph"
          defaultMessage="Astronium"
          values={{
              version: app.version,
          }}
        />
      );
      return (
        <MenuItem className="bp3-text-disabled" icon="code" text={message} href="https://www.astroniumbraintech.com/" />
      );
    }
  }

const mapStateToProps = state => ({
  app: selectMetadata(state).app,
});

export default connect(mapStateToProps)(AppItem);
