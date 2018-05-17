// export class ConnectListener {
//   constructor() {
//     this.initializeMessagesListener();
//   }
//   initializeMessagesListener() {
//     Chrome.runtime.onConnect.addListener(this.onConnectHandler.bind(this));
//   }
//   onConnectHandler(port: Chrome.runtime.Port) {
//     port.onMessage.addListener(this.onConnectMessageHandler.bind(this));
//   }
//   onConnectMessageHandler(msg, port) {
//     console.log('Received connection message: ' + msg);
//     const response = 'Greetings!';
//     port.postMessage(response);
//   }
// }
