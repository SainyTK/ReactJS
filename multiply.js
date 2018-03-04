import React,{Component} from 'react';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      base:2,
    };
  }

  handleEvent = (event)=>{
    let n = event.target.value;
    this.setState({base:n});
  }

  render(){
    return (
        <div>
            <h1>Multiply Table</h1>
            <input type='text' name='inBase' value={this.state.base} onChange={this.handleEvent}/>
            <Row base = {this.state.base} mul = '1'/>
            <Row base = {this.state.base} mul = '2'/>
            <Row base = {this.state.base} mul = '3'/>
            <Row base = {this.state.base} mul = '4'/>
            <Row base = {this.state.base} mul = '5'/>
            <Row base = {this.state.base} mul = '6'/>
            <Row base = {this.state.base} mul = '7'/>
            <Row base = {this.state.base} mul = '8'/>
            <Row base = {this.state.base} mul = '9'/>
            <Row base = {this.state.base} mul = '10'/>
            <Row base = {this.state.base} mul = '11'/>
            <Row base = {this.state.base} mul = '12'/>
            <Row base = {this.state.base} mul = '13'/>
            <Row base = {this.state.base} mul = '14'/>
        </div>
      );
  }
}

class Row extends Component{
  render(){
    return(
          <p>{this.props.base} x {this.props.mul} = {this.props.base*this.props.mul}</p>
      );
  }
}

export default App;