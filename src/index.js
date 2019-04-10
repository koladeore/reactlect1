// import react and react dom
import React from 'react';
import ReactDom from 'react-dom';

//  function getButtonText() {
//     return 'click on me';
// }

//create react component
const App = () => {
    const buttonText = {text : 'click me'};
    const labelText = 'NAME:';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    );

};

// take react component and show it on the screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);