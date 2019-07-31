import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PopupModal extends Component {
  render() {
    if (this.props.data) {
      const { data, closePopup } = this.props;
      return (
        <div id="popup1" className="overlay" >
          <div className="popup">
            {this.props.data.popupHeading ? (
              <h2 className={data.headingClass} data-test="heading">{data.popupHeading}</h2>
            ) : null}
            {this.props.data.popupContent ? (
              <div className={data.contentClass} data-test="content">{data.popupContent}</div>
            ) : null}
            <button className="close" onClick={closePopup} data-test="button">
              &times;
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

PopupModal.propTypes = {
  data: PropTypes.object,
  closePopup: PropTypes.func
};
PopupModal.defaultProps = {
  data: {},
  closePopup() {}
};

export default PopupModal;
