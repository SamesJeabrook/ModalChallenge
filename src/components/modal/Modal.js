import React from "react";
import "./modal.less";
import { getModalSize } from "./getModalSize";

export default class Modal extends React.PureComponent {

  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.onEscape = this.onEscape.bind(this);
  }

  closeModal(){
      const {
        onClose,
        modalName,
        canPassDataOnClose,
      } = this.props;
      const onCloseValues = canPassDataOnClose ? {
          message: 'You have closed welcome modal. Message from call back. I will hide in few seconds.'
      } : {};
    onClose && onClose(onCloseValues, modalName);
  };

  onEscape(event){
    if(event.keyCode === 27) {
      this.closeModal();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.onEscape, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onEscape, false);
  }

  render() {
    const {
      children,
      isModalOpen,
      closeButtonLabel,
      modalSize,
      modalTitle,
      modalName,
      autoClose
    } = this.props;

    if(autoClose){
      setTimeout(this.closeModal, 5000);
    }

    const activeModalClassName = isModalOpen ? "show-modal" : "";
    const modalSizeClassName = getModalSize(modalSize);
    return (
      <div className={`modal ${activeModalClassName} ${modalName}`}>
        <section
          className={`modal-main ${activeModalClassName} ${modalSizeClassName}`}
        >
          <div className="modal-header-wrap">
            <h1 className="modal-title">{modalTitle}</h1>
          </div>
          <div className="modal-content">
            {children}
          </div>
          { !autoClose && <footer className="modal-footer">
            <button className="button button_primary" onClick={this.closeModal}>{closeButtonLabel}</button>
          </footer>
          }
        </section>
      </div>
    );
  }
}
