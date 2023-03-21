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
      console.log(this.state.selectedValue);
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

const root = ReactDOM.createRoot(document.getElementById("maincomp"));
root.render(<MainComp />);