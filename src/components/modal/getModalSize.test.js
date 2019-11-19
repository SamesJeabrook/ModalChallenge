import { getModalSize } from './getModalSize';

describe('Get Modal size', () => {
	it('return modal size as small', () => {
		// actual
		const actual = getModalSize('small');

		// expect
		expect(actual).toEqual('small');
	});

	it('return modal size as large', () => {
		// actual
		const actual = getModalSize('large');

		// expect
		expect(actual).toEqual('large');
	});

	it('return modal size as default for other than small and large', () => {
		// actual
		const actual = getModalSize('largee');

		// expect
		expect(actual).toEqual('default');
	});
});
