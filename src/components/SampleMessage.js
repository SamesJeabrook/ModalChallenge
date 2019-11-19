import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resolveModal } from '../actions/modalActions';

class SampleMessage extends React.PureComponent {
	render() {
		const { resolveModalNew } = this.props;
		return (
			<div>
				<p>
          I am from SampleMessage content and have own button. To resolve modal,
          I shall send back some data.
				</p>
				<footer className="modal-footer">
					<button
						className="button button_primary"
						onClick={ () => resolveModalNew({ message: 'I am from sample message component' })
						}
					>
            Save
					</button>
				</footer>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state.modal,
});

const mapDispatchToProps = (dispatch) => ({
	resolveModalNew: (innerModalProps) => dispatch(resolveModal({ innerModalProps })),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SampleMessage);

SampleMessage.propTypes = {
	resolveModalNew: PropTypes.func,
};
