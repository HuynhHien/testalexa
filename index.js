/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');


const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const {app} = require('./app/app.js');




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


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
    console.log('Welcome to the Alexa Skills Kit, you can say hello!');
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'You have just unlock secret mode in Sonic! Enjoy!';

   /* request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });*/

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const AppleIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AppleIntent';
  },
  handle(handlerInput) {
    const speechText = 'You have just unlock Streets of Rage by code Apple! Enjoy the game!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    AppleIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
  console.log('exports.handler was called');


  