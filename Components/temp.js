import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = { celsius : 0, farenheit : 32};
    }

    handleCelsius = (event) => {
        let c = event.target.value;
        this.setState({ celsius : c , farenheit : c*5/9 + 32});
    }

    render() {
        return (
            <div>
                <h2 className="App-header"> Hello world!</h2>
                <p>Celsius: <input type="text" name="celsius"
                                value={this.state.celsius}
                                onChange={this.handleCelsius}/></p>
                <Foo celsius={this.state.celsius} farenheit={this.state.farenheit.toFixed(2)}/>

            </div>
        );
    }
}

class Foo extends Component {
    render() {
        return (<div>
                <h2>Farenheit : {this.props.farenheit}</h2>
            </div>

        );
    }
}


export default App;
