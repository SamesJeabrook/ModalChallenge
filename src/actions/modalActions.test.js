import { hideModal, showModal, resolveModal } from './modalActions';

describe('Modal Actions', () => {
	it('Should dispatch an action for SHOW_MODAL', () => {
		const modalProps = { name: test };
		const expected = {
			type: 'SHOW_MODAL',
			modalProps,
		};

		expect(showModal({ modalProps })).toEqual(expected);
	});

	it('Should dispatch an action for HIDE_MODAL', () => {
		const expected = {
			type: 'HIDE_MODAL',
		};

		expect(hideModal()).toEqual(expected);
	});

	it('Should dispatch an action for RESOLVE_MODAL', () => {
		const innerModalProps = { name: 'test' };
		const expected = {
			type: 'RESOLVE_MODAL',
			innerModalProps,
		};

		expect(resolveModal({ innerModalProps })).toEqual(expected);
	});
});
