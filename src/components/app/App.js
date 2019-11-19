import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './app.less';
import Modal from '../modal/Modal';
import SampleMessage from '../SampleMessage';
import SuccessMessage from '../successmessage/SuccessMessage';
import { showModal } from '../../actions/modalActions';

class App extends React.PureComponent {
	render() {
		const { showModalNew, isModalOpen, innerModalProps } = this.props;
		const SUCCESS_MODAL = 'Success';
		const DEFAULT_MODAL = 'Default';

		const successModalOptions = {
			isModalOpen,
			modalSize: 'small',
			modalName: SUCCESS_MODAL,
			modalTitle: 'Success !',
			closeButtonLabel: 'Close',
			canShowDefaultClose: false,
			autoClose: true,
			children: <SuccessMessage />,
		};

		const resolveModalOptions = {
			isModalOpen,
			modalSize: 'large',
			modalName: DEFAULT_MODAL,
			modalTitle: 'Welcome !',
			closeButtonLabel: 'Close',
			canShowDefaultClose: false,
			children: <SampleMessage />,
		};

		const defaultModalOptions = {
			isModalOpen,
			modalSize: 'small',
			modalName: DEFAULT_MODAL,
			modalTitle: 'Hello',
			closeButtonLabel: 'Ok',
			canShowDefaultClose: true,
			children: 'I am normal modal',
		};

		const hasDataFromModalComponent = innerModalProps && innerModalProps.message;

		return (
			<div>
				<header className="header">
					<h1 className="header-title">Modal demos</h1>
				</header>
				<div className="content">

					<div className="action-buttons-wrapper">
						<button
							className="button button_primary"
							onClick={ () => showModalNew(resolveModalOptions) }
						>
              Click me for modal which resolve
						</button>

						<button
							className="button button_success"
							onClick={ () => showModalNew(defaultModalOptions) }
						>
              Click me for normal modal
						</button>

						<button
							className="button button_success"
							onClick={ () => showModalNew(successModalOptions) }
						>
              Click me for success modal
						</button>

						{isModalOpen && (
							<Modal />
						)}
					</div>

					{hasDataFromModalComponent && (
						<p className={ 'note' }>
							{innerModalProps.message}
						</p>
					)}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	showModalNew: (modalProps) => dispatch(showModal({ modalProps })),
});

const mapStateToProps = (state) => ({
	...state.modal,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

App.propTypes = {
	showModalNew: PropTypes.func,
	isModalOpen: PropTypes.bool,
	innerModalProps: PropTypes.node,

};
