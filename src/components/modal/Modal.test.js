import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Modal from './Modal';

test('validate Modal componet', function(){
    const html = (<Modal/>);
    const componentTree = renderer.create(html).toJSON();

    expect(componentTree).toMatchSnapshot();
})

test('It add show-modal class when modal opens', function(){
    const modalComponent = shallow(<Modal isModalOpen={true} />);
    expect(modalComponent.find('div.modal').hasClass('show-modal')).toBeTruthy();
})

test('It remove show-modal class when modal opens', function(){
    const modalComponent = shallow(<Modal isModalOpen={false} />);
    expect(modalComponent.find('div.modal').hasClass('show-modal')).toBeFalsy();
})

test('It add modal size', function(){
    const modalComponent = shallow(<Modal  modalSize='small' />);
    expect(modalComponent.find('.modal-main').hasClass('small')).toBeTruthy();
})

test('It add modal size for large', function(){
    const modalComponent = shallow(<Modal  modalSize='large' />);
    expect(modalComponent.find('.modal-main').hasClass('large')).toBeTruthy();
})

test('It add modal size default if it is not small or large', function(){
    const modalComponent = shallow(<Modal modalSize='some' />);
    expect(modalComponent.find('.modal-main').hasClass('default')).toBeTruthy();
})