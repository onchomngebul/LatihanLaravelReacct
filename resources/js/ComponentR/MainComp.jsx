import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import DDWorkflow from './dropdown';
import DiagramDex from './DiagramDex';

class MainComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedValue: null // default value for selected dropdown value
      };
    }

    handleDropdownChange = (event) => {
      this.setState({ selectedValue: event.value });
    }

    render() {
      return (
        <div>
            <div className="game-board">
                <DDWorkflow 
                  onChange={this.handleDropdownChange} >

                </DDWorkflow>
            </div>
            <DiagramDex
              selectedValue={this.state.selectedValue}>

            </DiagramDex>
        </div>
      );
    }
  }

  if (document.getElementById('maincomp')) {
    const root = ReactDOM.createRoot(document.getElementById("maincomp"));
    root.render(<MainComp />);
  }