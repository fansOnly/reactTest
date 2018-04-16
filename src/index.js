import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// const i = 110;
// var style=  {
//     fontSize: 12,
//     color: '#f00'
// };
// var arr = [
//     <p>11111111111111</p>,
//     <p>22222222222222222</p>
// ];

// es5
// var MyReact = React.createClass({
//     render: function(){
//         return <p>我是自定义租组件啊！！</p>;
//     }
// });
// class MyReact extends React.Component{
//     render(){
//         return <p>你好, {this.props.name}!</p>;
//     }
// };
// ReactDOM.render(
//     <section>
//         {/* 我是注释啊 */}
//         <div style={style}>
//             {i == 1 ? 'xx': 'yy'}
//         </div>
//         <div>{arr}</div>
//         <MyReact name="pp" />
//     </section>,
//     document.getElementById('root')
// );

class Square extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         value: null
    //     };
    // };
    render(){
        return(
            <p className="square" onClick={()=>this.props.onClick()}>{this.props.value}</p>
        );
    }
};
class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            squares: Array(9).fill(null)
        }
    };
    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />;
    };
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'x';
        this.setState({squares:squares})
    };
    render(){
        return (
            <div>
                {/* <div>{status}</div> */}
                <div class="xx">
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
ReactDOM.render(
    <Board />,
    document.getElementById('root')
);




















registerServiceWorker();
