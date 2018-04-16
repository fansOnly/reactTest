import React from 'react';

class Statex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    };
    componentDidMount() {
        this.timeId = setInterval(()=>this.tick(),1000);
    };
    componentWillUnmount() {
        clearInterval(this.timeId)
    };
    tick(){
        this.setState({
            date: new Date()
        })
    };
    render(){
        return(
            <div>
                <p>now: {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Statex;