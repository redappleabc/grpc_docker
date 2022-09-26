import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { PingPongServiceClient } = require('./ping_pong_grpc_web_pb');
const { PingRequest, PongResponse } = require('./ping_pong_pb.js');

var client = new PingPongServiceClient('http://34.123.209.61:8050', null, null);

class App extends Component {
  
  callGrpcService = () => {
    const request = new PingRequest();
    request.setPing('Ping');

    client.pingPong(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log(response.getPong())
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
        </header>
      </div>
    );
  }
}

export default App;