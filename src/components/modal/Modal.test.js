import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

jest.mock("react-redux", () => {
    return {
      connect: (mapStateToProps, mapDispatchToProps) => (
        ReactComponent
      ) => ReactComponent
    };
  });

test('validate Modal componet', function(){
    const props = {
        modalProps:{
            children: 'test'
        }
    }
    const html = (<Modal {...props}/>);
    const componentTree = renderer.create(html).toJSON();

    expect(componentTree).toMatchSnapshot();
})