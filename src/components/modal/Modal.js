import React from 'react';
import './modal.less';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getModalSize } from './getModalSize';
import { hideModal } from '../../actions/modalActions';

class Modal extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onEscape = this.onEscape.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onEscape, false);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onEscape, false);
	}

	onEscape(event) {
		const { closeModal } = this.props;
		if (event.keyCode === 27) {
			closeModal();
		}
	}

	render() {
		const { isModalOpen, closeModal, modalProps } = this.props;
		const {
			children,
			closeButtonLabel,
			modalSize,
			modalTitle,
			modalName,
			autoClose,
			canShowDefaultClose,
		} = modalProps;

		if (autoClose) {
			setTimeout(closeModal, 5000);
		}

		const activeModalClassName = isModalOpen ? 'show-modal' : '';
		const modalSizeClassName = getModalSize(modalSize);
		return (
			<div className={ `modal ${activeModalClassName} ${modalName}` }>
				<section
					className={ `modal-main ${activeModalClassName} ${modalSizeClassName}` }
				>
					<div className="modal-header-wrap">
						<h1 className="modal-title">{modalTitle}</h1>
					</div>
					<div className="modal-content">
						{children}
						{canShowDefaultClose && (
							<footer className="modal-footer">
								<button className="button button_primary" onClick={ closeModal }>
									{closeButtonLabel}
								</button>
							</footer>
						)}
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state.modal,
});

const mapDispatchToProps = (dispatch) => ({
	closeModal: () => dispatch(hideModal()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);

Modal.propTypes = {
	children: PropTypes.node,
	closeModal: PropTypes.func,
	isModalOpen: PropTypes.bool,
	modalProps: PropTypes.object,
};
