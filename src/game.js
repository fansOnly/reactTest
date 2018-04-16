import React, { Component } from 'react';


function Square(props){
    return (
        <p className="square" onClick={props.onClick}>{props.value}</p>
    )
}
class Board extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     };
    // };
    renderSquare(i){
        return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)} />;
    };
    
    render(){
        return (
            <div>
                
                <div className="xx">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        )
    }
};
class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        }
    };
    handleClick(i){
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'x' : 'y';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext
        })
    };
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? true: false,
        })
    };
    render(){
        const history = this.state.history;
        const current = history[history.length -1];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
              'Move #' + move :
              'Game start';
            return (
              <li>
                <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
              </li>
            );
          });
        let status;
        if(winner){
            status = 'Winner is :' + winner;
        }else{
            status = "Next player : " + (this.state.xIsNext ? 'x' : 'y');
        }
        return (
            <div>
                <div className="xt">{status}</div>
                <Board squares={current.squares} onClick={(i)=>this.handleClick(i)} />
                <p className="bt">???</p>
                <div>
                    <ul>{moves}</ul>
                </div>
            </div>
        )
    }
}


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}


export default Game;