import ModalWrapper from 'components/shared/ModalWrapper';
import appActions from 'actions/AppActions';
import React, { Component } from 'react';

export default class LocateModal extends Component {

  close = () => {
    appActions.toggleLocateModal({ visible: false });
  }

  render () {
    const {active} = this.props;

    return (
      <ModalWrapper theme='locate-modal' active={active} close={this.close}>
        <h3>Locate Something</h3>
      </ModalWrapper>
    );
  }
}
