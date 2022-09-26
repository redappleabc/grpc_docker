var grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('ping_pong.proto');
const pingPongProto = grpc.loadPackageDefinition(packageDefinition);
var server = new grpc.Server();

server.addService(pingPongProto.pingpong.PingPongService.service, {
  pingPong: function(call,callback) {
    console.log("Request")
    return callback(null,{pong:"Pong"})
  }
});
console.log("start")
server.bind('0.0.0.0:5000',grpc.ServerCredentials.createInsecure());
server.start();
console.log("started")
