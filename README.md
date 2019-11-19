# Brandworkz Modal

This challenge is to test your creativity and technical ability.  A chance to show off. The requirements are simple.

We would like to have a simple reuseable component that pops up a Modal.

## Requirements

* It must be built using React
* It must be highly configurable
* It must be styled

You can not use someone elses plugin to create the modal, it can be styled in anyway you please (stylesheet, styled-components, etc).
You can add as many other packages as you please, but please provide an explanation into your choices and decisions behind the additional technologies you include.

We have provided a basic webpack configuration that can be run from using `yarn start` command.

## Comments from Saravanan, Gopalan

## Initial step

type below commands on root directory, to install necessary packages. Request you please delete node_modules and run below command for safe. Some reason, it is conflicting with exising node_modules. 

```npm install```

## To start application

type npm run start, to run the application

``` npm run start ```

open browser type ```http:localhost:9090``` to view application.

## To run test

npm run test 

## Notes 

1. `react` to build this assignment.
    a. `react-redux` to do the state management in store.
2. `Webpack` to bundle the project. 
3. `Webpack-dev-server` to run the application. 
4. `Babel` to transpile the js file.
5. `Jest` to run the test.
    1. There are couple of unit test for utils like `getModalSize`
    2. And, snapshot test to validate DOM.
6. `LESS` file for styling. it enable us to write dynamic and less code.
    1. `variables` created and imported in LESS file, to keep the variable as a seperate layer.
    2. `Mixins` - created and import in LESS file, to re use and maintain the consistency in code.
7. Some places utilized ES6 style such as arrow function to demonstrate the usage.
8. `fontawesome` for icons in SVG , it helps to render better. Just used tick icon.
9. As a good practice, would prefer to split the component into chunks. This will avoid redundent code and easy to change/maintain. So, have created Success Message and Sample Message components. Love to create more components as it helps and easy to maintain.
10. Created modal component with configurations such as Modal size, modalName, modalTitle, modalClose, closeButton label, children as component to render inside modal.
    a. Used React simle dispatch action, reducer to handle modal state such as open, close and resolve. 
11. One modal opens and display success message, and it close automatically after few seconds. This opens with small size of modal.
12. Another modal opens and display the content. On click of close button, can pass the message for call back. which will display in main page.
13. By default, on escape modal close.
14. Just placed button with different styles to open the modal.
15. Surprised to see the node_modules checked in. However, I also checked in all node_modules. Would like to request please delete node_modules and run npm install to just make sure.

