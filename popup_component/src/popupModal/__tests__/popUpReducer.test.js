import { types } from './../popupActions';
import popupReducer from './../popupReducer';

const initialState = { state: {} }

const popupParentState = {state: {
    buttonContent: "Pop up button from API",
    buttonClass: "button",
    align: "button--align-center",
    size: "button--size-medium"
}}
const popupState = {state: {
    popupHeading: "Popup box heading from API",
    popupContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.n ",
    headingClass: "popup__heading",
    contentClass: "popup__content",
    popupCTA: "CTA",
    popupCTAClass: "popup__cta"
}}

describe('Popup Reducer', () => {

    it('Should return default state', () => {
        const newState = popupReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return new popup parent data if receiving type', () => {
        const newState = popupReducer(undefined, {
            type: types.GET_POPUP_PARENT_STATE_SUCCESS,
            popupParentData: popupParentState.state
        });
        expect(newState).toEqual(popupParentState);
    });
    it('Should return new popup data if receiving type', () => {
        const newState = popupReducer(undefined, {
            type: types.GET_POPUP_STATE_SUCCESS,
            popupData: popupState.state
        });
        expect(newState).toEqual(popupState);
    });
});