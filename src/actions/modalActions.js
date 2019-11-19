
export const showModal = ({ modalProps }) => ({
	type: 'SHOW_MODAL',
	modalProps,
});

export const hideModal = () => ({
	type: 'HIDE_MODAL',
});

export const resolveModal = ({ innerModalProps }) => ({
	type: 'RESOLVE_MODAL',
	innerModalProps,
});
