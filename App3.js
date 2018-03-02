
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state ={ name: ''};
    }

    handleName = (event) => {
        let n = event.target.value;
        this.setState({name:n});
    }

    handleSurname = (event) => {
        let n = event.target.value;
        this.setState({surname:n});
    }

    render() {
        return (
            <div>
                <h2 className="App-header"> Hello world!</h2>
                <p>Name: <input type="text" name="name"
                                value={this.state.name}
                                onChange={this.handleName}/></p>
                <p>Surname: <input type="text" name="surname"
                                value={this.state.surname}
                                onChange={this.handleSurname}/></p>
                <Foo name={this.state.name} surname={this.state.surname}/>

            </div>
        );
    }
}

class Foo extends Component {
    render() {
        return (<div>
                <h2>{this.props.name} {this.props.surname}</h2>
                For for For for For for  <br/>
                For for For for For for  <br/>
                For for For for For for  <br/>
            </div>

        );
    }
}


export default App;
