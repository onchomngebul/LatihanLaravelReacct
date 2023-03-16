import React from 'react';
import ReactDOM from 'react-dom/client';
 
import 'devextreme/dist/css/dx.light.css';
 
import Button from 'devextreme-react/button';
 
class Tombol extends React.Component {
    render() {
        return (
            <Button
                type="success"
                text="Click me"
                onClick={this.sayHelloWorld}
            />
        );
    }
 
    sayHelloWorld() {
        alert('Hello world!')
    }
}
 
const root = ReactDOM.createRoot(document.getElementById("tombol"));
root.render(<Tombol />);