var grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('./src/ping_pong.proto');
const pingPongProto = grpc.loadPackageDefinition(packageDefinition);
var server = new grpc.Server();

server.addService(pingPongProto.pingpong.PingPongService.service, {
  pingPong: function(call,callback) {
    console.log("Request")
    return callback(null,{pong:"Pong"})
  }
});

server.bind('localhost:8080',grpc.ServerCredentials.createInsecure());
server.start();