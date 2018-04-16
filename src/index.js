import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Game from './game';
import Statex from './state2';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Statex />, document.getElementById('root'));
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

// class Square extends React.Component {
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         value: null
//     //     };
//     // };
//     render(){
//         return(
//             <p className="square" onClick={()=>this.props.onClick()}>{this.props.value}</p>
//         );
//     }
// };



registerServiceWorker();
