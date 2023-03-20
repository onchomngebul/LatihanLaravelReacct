import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import DDWorkflow from './dropdown';
import DiagramDex from './DiagramDex';

class MainComp extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
            <div className="game-board">
                <DDWorkflow />
            </div>
            <DiagramDex></DiagramDex>
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById("maincomp"));
root.render(<MainComp />);