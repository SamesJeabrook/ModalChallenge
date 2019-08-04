import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock("react-redux", () => {
    return {
      connect: (mapStateToProps, mapDispatchToProps) => (
        ReactComponent
      ) => ReactComponent
    };
  });

test('Validate App component', function(){
    // arrange
    const html = (<App/>);
    const tree = renderer.create(html).toJSON();

    expect(tree).toMatchSnapshot();   
})
