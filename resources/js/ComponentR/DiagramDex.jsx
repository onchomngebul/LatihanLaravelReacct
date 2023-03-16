import React from 'react';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.dark.css';
import Diagram from 'devextreme-react/diagram';
import 'devexpress-diagram/dist/dx-diagram.min.css';
//import 'whatwg-fetch';

class DiagramDex extends React.Component {
  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  componentDidMount() {
    const diagram = this.diagramRef.current.instance;
    fetch('../data/diagram-flow.json')
      .then((response) => response.json())
      .then((json) => {
        diagram.import(JSON.stringify(json));
      })
      .catch(() => {
        throw new Error('Data Loading Error');
      });
  }

  render() {
    return (
      <Diagram id="diagram" ref={this.diagramRef} />
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("diagramDex"));
root.render(<DiagramDex />);