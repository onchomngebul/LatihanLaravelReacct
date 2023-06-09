import React from 'react';
import ReactDOM from 'react-dom/client';
import Diagram from 'devextreme-react/diagram';
import 'devexpress-diagram/dist/dx-diagram.min.css';
//import 'whatwg-fetch';

class DiagramDex extends React.Component {
  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.selectedValue != null){
      this.updateDiagram();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedValue !== this.props.selectedValue) {
      this.updateDiagram();
    }
  }

  updateDiagram = () => {
    const diagram = this.diagramRef.current.instance;
    fetch('api/GenerateDiagramFlow/' + this.props.selectedValue)
      .then((response) => response.json())
      .then((json) => {
        diagram.import(JSON.stringify(json));
      })
      .catch(() => {
        throw new Error('Data Loading Error');
      });
  };

  render() {
    return (
      <Diagram id="diagram" ref={this.diagramRef} />
    );
  }
}

export default DiagramDex;
// const root = ReactDOM.createRoot(document.getElementById("diagramDex"));
// root.render(<DiagramDex />);