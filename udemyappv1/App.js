import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foo_1 from './funcs';
import Char from './ex2';

//EXERCISE 1
const UserInput = (props) => {
  return (
    <div> 
    <input type="text" onChange={props.changed}  /> 
    </div>
    );  
}

const UserOutput = (props) => {
  return (
    <div> 
    Username: {props.userName} 
    </div>
    )  
}
  //END EXERCISE 1

  class App extends Component {
    state = {
      exercise1_username: [ {username: 'default'}],
      passengers: [
      { plane:'United', message:'learing to fly with Asiana!', seatnumber:11 },
      { plane:'American', message:'bad airline', seatnumber:21 } ,
      { plane:'Virgin', message:'the friendly skies', seatnumber:91 }
      ],
      showPassengers: false
    }

  //EXERCISE 1
  exercise1_changeUserName = (event) => {
    this.setState( {
      exercise1_username: [ {username: event.target.value}]
    });
  }
  //END EXERCISE 1


  switchPassenger = (newPlane) => {
    this.setState( {
      passengers: [
      { plane: newPlane, message:"I love japan" },
      { plane:'Asiana', message:"I love japan" },
      { plane:'Asiana', message:"I love japan" }  
      ]
    });
  }

  nameChangedPassenger = (event) => {
    this.setState( {
      passengers: [
      { plane: event.target.value, message:"I love japan" },
      { plane:'Asiana', message:"I love japan" },
      { plane:'Asiana', message:"I love japan" }  
      ]
    });
  }

  togglePassenger = () => {
    const doesShow = this.state.showPassengers;
    this.setState({showPassengers: !doesShow});
    console.log( this.state.showPassengers );
  }


  render() {
    const style = {
      backgroundColor: 'yellow'
    }

    const inLineStyle = {
      border: 'solid 1px blue'
    };

    const classes = [];
    classes.push('red');

    let passengers2 = null; 
    if (this.state.showPassengers) {
      passengers2 = (
        <div style= {style} >
        <Foo_1 plane={this.state.passengers[0].plane} > {this.state.passengers[0].message} </Foo_1> 
        <Foo_1 plane={this.state.passengers[1].plane}> {this.state.passengers[1].message} </Foo_1> 
        <Foo_1 plane={this.state.passengers[2].plane}> {this.state.passengers[2].message} </Foo_1> 
        List vers <br />
        {this.state.passengers.map ( (passengers, index) => {
          return <Foo_1 key={passengers.seatnumber}  plane={passengers.plane} message={passengers.message} />
        })}
        </div>

        );
      style.backgroundColor="blue";
    }

    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro" >
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <hr />

      <Foo_1 plane="Alanis" > Isn't it Ironic? </Foo_1> 
      <br /> 
      <Foo_1 plane={this.state.passengers[0].plane} changed={this.nameChangedPassenger} > {this.state.passengers[0].message} | <a onClick={this.switchPassenger.bind(this, 'Air China')}>switch to Air China</a></Foo_1> 
      <Foo_1 plane={this.state.passengers[1].plane}> {this.state.passengers[1].message} </Foo_1> 
      <Foo_1 plane={this.state.passengers[2].plane} > {this.state.passengers[2].message} </Foo_1> 
      <button onClick={this.switchPassenger.bind(this, 'Asiana')} style={inLineStyle} className={classes.join('')} >Switch to Asiana with binding</button><br/>
    <button onClick={ () => this.switchPassenger("SouthWest") } >Switch to Southwest with anoym arrow function without bind </button> {/* inefficiency, bind recommended */}

    <hr />

    Assignment 1<br />
    <UserInput changed={this.exercise1_changeUserName}></UserInput>
    <UserOutput userName={this.state.exercise1_username[0].username}></UserOutput>

    <hr />

    {this.state.showPassengers === true ? 
      <div>
      <Foo_1 plane={this.state.passengers[0].plane}> {this.state.passengers[0].message} </Foo_1> 
      <Foo_1 plane={this.state.passengers[1].plane}> {this.state.passengers[1].message} </Foo_1> 
      <Foo_1 plane={this.state.passengers[2].plane}> {this.state.passengers[2].message} </Foo_1> 
      </div> : null
    }
    <button onClick={this.togglePassenger} >Switch Passengers </button> 

    <hr />

    { passengers2 }
    <button onClick={this.togglePassenger} >Switch Passengers List w/map </button>

    <hr />
    </div>
    );
  }
}

export default App;
