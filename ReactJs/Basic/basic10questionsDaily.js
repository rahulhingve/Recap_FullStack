// Most Asked ReactJS Interview Questions
// What is ReactJS?
// react is a JavaScript library for building fast and interactive user interfaces it was developed at Facebook in 2011 and currently it's the most popular javascript library for building user interfaces 

// 	react applications are components a component is essentially a piece of the user interface so when building applications with react we build a bunch of independent isolated and reusable components and then compose them to build complex user interfaces every react application has at least one component which we refer to as the root component this component represents the internal application and contains other child components so every react application is essentially a tree of components 

// 	each component is a piece of UI we can build these components in isolation and then put them together to build complex UIs in terms of implementation a component is typically implemented as a JavaScript class that has some state and render method the state here is the data that we want to display when the component is rendered and the render method as you can tell is responsible for describing what the UI should look like the output of this render method is a react element which is a simple plain

// 	JavaScript object that maps to a Dom element it's not a real Dom element is just a plain JavaScript object that represents that Dom element in memory so react keeps a lightweight representation of the Dom in memory which were referred to as the virtual Dom unlike the browser or the real Dom this virtual DOM is cheap to create when we change the state of a component we get a new react element react will then compare this element and his children with the previous one it figures out what is changed and then it will update a part

// 	of the real Dom to keep it in sync with the virtual Dom so that means when building applications we react unlike vanilla JavaScript or jQuery we no longer have to work with the Dom API in browsers in other words we no longer have to write code in query and manipulate the Dom or attached event handlers to Dom elements we simply change the state of our components and react will automatically update the Dom to match that state and that's exactly why this library is called react because when the state changes react essentially

// 	reacts to the state change and updates the dumb one of the questions that I often get is react or angular well both react and angular are similar in terms of their component based architecture however angular is a framework or a complete solution while react is a library it only takes care of rendering the view and making sure that the view is in sync with the state let's all react does nothing less nothing more for this very reason react has a very small API to learn so when building applications with react we need to use

// 	other libraries for things like routing or calling HTTP services and so on but this is not necessarily a bad thing because you get to choose the libraries that you prefer as opposed to being fixed with what angular gives you which often breaks from one version to another so that's all about react next we're going to set up our development environment[Music]


// Why ReactJS is Used?
// How Does ReactJS work?
// What are the features of ReactJS?
// What is JSX?
// How to create components in ReactJS?
// What are the advantages of ReactJS?
// Differentiate between real DOM and virtual DOM?
// What are forms in ReactJS?
// How is React different from React Native?a