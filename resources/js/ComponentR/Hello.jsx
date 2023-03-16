import React from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloReact() {
    return (
        <h1>Hello React!</h1>
    );
}

    const helo = ReactDOM.createRoot(document.getElementById('hello-react'));
    helo.render(<HelloReact/>)