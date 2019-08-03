import React from "react";
import "./app.less";
import Modal from "../modal/Modal";
import SampleMessage from "../SampleMessage";
import SuccessMessage from "../successmessage/SuccessMessage";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDefaultModalOpen: false,
      isSuccessModalOpen: false,
      onCloseMessage: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.reset = this.reset.bind(this);
  }

  openModal(modalName) {
    const formattedModalName = `is${modalName}ModalOpen`;
    this.setState({
      [formattedModalName]: true
    });
  }

  reset() {
    this.setState({
      onCloseMessage: ""
    });
  }

  closeModal(values, modalName) {
    const formattedModalName = `is${modalName}ModalOpen`;
    this.setState({
      [formattedModalName]: false,
      onCloseMessage: values.message
    });
    if(values.message !== ''){
        setTimeout(this.reset, 5000);
    }
  }

  render() {
    const {
      isDefaultModalOpen,
      isSuccessModalOpen,
      onCloseMessage
    } = this.state;
    const SUCCESS_MODAL = "Success";
    const DEFAULT_MODAL = "Default";
    const hasCloseMessage = onCloseMessage !== "";
    return (
      <div>
        <header className="header">
          <h1 className="header-title">Modal demos</h1>
        </header>
        <div className="content">
          {
           isDefaultModalOpen &&      
          <Modal
            isModalOpen={isDefaultModalOpen}
            modalSize="larges"
            modalName={DEFAULT_MODAL}
            modalTitle="Welcome !"
            closeButtonLabel="Close"
            onClose={this.closeModal}
            canPassDataOnClose={true}
            children={<SampleMessage />}
          />
        }

        {isSuccessModalOpen && 
          <Modal
            isModalOpen={isSuccessModalOpen}
            modalName={SUCCESS_MODAL}
            modalSize="small"
            modalTitle="Success !"
            closeButtonLabel="Close"
            canPassDataOnClose={false}
            onClose={this.closeModal}
            autoClose={true}
            children={<SuccessMessage />}
          />
        }

          <div className="action-buttons-wrapper">
            <button
              className="button button_primary"
              onClick={e => this.openModal(DEFAULT_MODAL)}
            >
              Click me for modal
            </button>
            <button
              className="button button_success"
              onClick={e => this.openModal(SUCCESS_MODAL)}
            >
              Click me for Success modal
            </button>
          </div>

          {hasCloseMessage && (
            <p className={`note ${!hasCloseMessage ? "hide" : ""}`}>
              {onCloseMessage}
            </p>
          )}
          
        </div>
      </div>
    );
  }
}
