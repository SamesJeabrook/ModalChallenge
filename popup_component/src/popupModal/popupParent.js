import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopupModal from './popupModal.jsx';
import { actions } from './popupActions';
export class PopupParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }
  escapeClicked = e => {
    if (e.keyCode === 27) {
        this.togglePopup();
    }
}

  togglePopup = e => {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    }); 
    if (this.state.showPopup) {
      this.props.getPopupParentData();
    } else {
      this.props.getPopupData();
    }
  };
  componentDidMount() {
    this.props.getPopupParentData();
  }

  render() {
    if (!this.state.showPopup) {
      return (
        <div>
          <div className="box">
            <a
              className={this.props.popupParentState['buttonClass']}
              href="#popup1"
              onClick={this.togglePopup} data-test="link-button">
              {this.props.popupParentState['buttonContent']}
            </a>
          </div>
          
        </div>
      );
    } else return (<div>
      {this.props.popupState ? (
      <PopupModal
        data={this.props.popupState}
        closePopup={this.togglePopup}
      />
    ) : null}</div>);
  }
}
const mapStateToProps = appState => {
  return {
    popupParentState: appState.popupReducer.state,
    popupState: appState.popupReducer.state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPopupParentData() {
      dispatch(actions.getPopupParentState());
    },
    getPopupData() {
      dispatch(actions.getPopupState());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupParent);