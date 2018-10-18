/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');


const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const {app} = require('./app/app.js');


const regPort = 8080;
var server = http.createServer(function (req, res) {

  if (req.method === "GET") {
    console.log(`Register request regId = ${res.body}!`);  
    res.send('Thanks you !');
  } else if (req.method === "POST") {
  
      var body = "";
      req.on("data", function (chunk) {
          body += chunk;
      });

      req.on("end", function(){
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(body);
      });
  }

}).listen(regPort);


const verifiedServer = express();
verifiedServer.listen = function() {
    try {
        const verifier = require('alexa-verifier-middleware');
        let router = express.Router(); //eslint-disable-line
        verifiedServer.use(router);
        router.use(verifier);
        router.use(bodyParser.json());
        let server = http.createServer(this);
        return server.listen.apply(server, arguments); // eslint-disable-line
    } catch (error) {
        if (error.code === 'MODULE_NOT_FOUND') {
            console.log();
            console.log('  Please install module alexa-verifier-middleware');
            console.log('  $ npm install alexa-verifier-middleware');
            console.log();
        } else {
            console.log(error);
        }
    }
};

const Webhook = verifiedServer;

const port = process.env.PORT || 3000;
Webhook.listen(port, () => {
  console.log(`Example server listening on port ${port}!`);  
});
Webhook.post('/webhook', (req, res) => {
  app.handleWebhook(req, res);
});
