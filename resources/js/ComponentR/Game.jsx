import React from "react";
import ReactDOM from 'react-dom/client';

// class Square extends React.Component {
//     render() {
//       return (
//         <button 
//           className="square kotak" 
//           onClick={() => this.props.onClick()}
//         >
//           { this.props.nomor }
//         </button>
//       );
//     }
//   }

  function KotakKotak(props){
    return(
      <button 
        className="square kotak" 
        onClick={props.onClick}
      >
        { props.nomor }
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares : Array(9).fill(null),
        playerTurn : 'X'
      }
    }

    handleClick(i) {
      var tempSQ = this.state.squares.slice();
      var nextTurn = this.state.playerTurn;
      tempSQ[i] = nextTurn
      switch(nextTurn){
        case 'X':
          nextTurn = 'O';
          break;
        case 'O':
          nextTurn = 'Z';
          break;
        case 'Z':
          nextTurn = 'X';
          break;
      }

      this.setState({
        squares : tempSQ,
        playerTurn : nextTurn
      });
    }

    renderSquare(i) {
      return <KotakKotak 
        nomor={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("gim"));
  root.render(<Game />);