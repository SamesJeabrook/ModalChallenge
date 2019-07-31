import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../testSetup/testUtils';

import PopupModal from './../popupModal';
describe('PopupModal Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {                
                closePopup: () => {
                }
            };
            const propsError = checkProps(PopupModal, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
              data:{headingClass:"some name",
              popupHeading:"heading text",
              contentClass:"some name",
              popupContent:"some content"},
                closePopup: mockFunc
            };
            wrapper = shallow(<PopupModal {...props} />);
        });

        it('Should Render a heading', () => {
          const heading = findByTestAtrr(wrapper, 'heading');
          expect(heading.length).toBe(1);
      });


      it('Should Render content', () => {
        const content = findByTestAtrr(wrapper, 'content');
        expect(content.length).toBe(1);
    });

        it('Should Render a button', () => {
            const button = findByTestAtrr(wrapper, 'button');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'button');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});