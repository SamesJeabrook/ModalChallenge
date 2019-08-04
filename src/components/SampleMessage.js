import React from "react";
import { connect } from "react-redux";
import {resolveModal} from '../actions/modalActions'

class SampleMessage extends React.PureComponent {
  render() {
    const { resolveModal } = this.props;
    return (
      <div>
        <p>
          I am from SampleMessage content and have own button. To resolve modal,
          I shall send back some data.
        </p>
        <footer className="modal-footer">
          <button
            className="button button_primary"
            onClick={() =>
              resolveModal({ message: "I am from sample message component" })
            }
          >
            Save
          </button>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resolveModal: innerModalProps =>
      dispatch(resolveModal({ innerModalProps }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleMessage);
