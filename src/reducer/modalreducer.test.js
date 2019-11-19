import modal, { initialState } from './modal';

describe('Modal reducer', () => {
	it('should return initial state', () => {
		const actual = modal(undefined, {});

		expect(actual).toEqual(initialState);
	});

	it('should return show modal state when dispatch SHOW_MODAL', () => {
		const actual = modal({ undefined }, { type: 'SHOW_MODAL', modalProps: { name: 'test' } });

		const expected = {
			isModalOpen: true,
			modalProps: { name: 'test' },
			innerModalProps: {},
		};

		expect(actual).toEqual(expected);
	});

	it('should return initial state when dispatch HIDE_MODAL', () => {
		const actual = modal({ undefined }, { type: 'HIDE_MODAL' });

		expect(actual).toEqual(initialState);
	});

	it('Should return inner modal props, when RESOLVE_MODAL', () => {
		const actual = modal(undefined, { type: 'RESOLVE_MODAL', innerModalProps: { name: 'Inner' } });

		const expected = {
			isModalOpen: false,
			modalProps: {},
			innerModalProps: { name: 'Inner' },
		};

		expect(actual).toEqual(expected);
	});
});
