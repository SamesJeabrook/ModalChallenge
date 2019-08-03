import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import {shallow} from 'enzyme';

test('Validate App component', function(){
    // arrange
    const html = (<App/>);
    const tree = renderer.create(html).toJSON();

    expect(tree).toMatchSnapshot();   
})

test('It opens the modal on click of button', function(){

    const appComponent = shallow(<App />)
    const modalButton = appComponent.find('.button_primary');
    modalButton.simulate('click');

    expect(appComponent.state().isDefaultModalOpen).toBeTruthy();
    
})

test('It opens the modal and make sure only one modal opens', function(){

    const appComponent = shallow(<App />)
    const modalButton = appComponent.find('.button_primary');
    modalButton.simulate('click');

    expect(appComponent.state().isDefaultModalOpen).toBeTruthy();
    expect(appComponent.state().isSuccessModalOpen).toBeFalsy();

})

test('It shows the close message, if receive from modal', function(){

    const appComponent = shallow(<App />)
    const modalButton = appComponent.find('.button_primary');
    modalButton.simulate('click');

    appComponent.setState({onCloseMessage: 'Close'});

    expect(appComponent.find('.note').hasClass('hide')).toBeFalsy();

})

test('It does not show the close message, if not received from modal', function(){

    const appComponent = shallow(<App />)
    const modalButton = appComponent.find('.button_primary');
    modalButton.simulate('click');

    expect(appComponent.find('.note').exists()).toBeFalsy();

})