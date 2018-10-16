/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

var request = require("request");

var options = { method: 'POST',
  url: 'https://fcm.googleapis.com/fcm/send',
  headers: 
   { 'postman-token': '2de21482-da45-44b2-8641-9a201d77562c',
     'cache-control': 'no-cache',
     'content-type': 'application/json',
     authorization: 'key=AAAA87ESbJk:APA91bE3bZqoVtdk-KB0pIvt9DboHSYqKvCuj41-QOdlQC3oIpsyJ90X70kkJVSsKDHS4lki7uuPvgl66tXrVCgv-wYdikRk7e__9xkX6WxuvP1prO4qAG2cMHB2K7nNll_Wef-P8-sZ' },
  body: 
   { notification: { title: 'Hello', body: 'World', icon: 'firebase-icon.png' },
     to: 'cQpFHcbb_No:APA91bF9jYYO15dZHJW3FHqOG7SAha0xlDjDDck9wi1NMOY1lZ6eNYDpI7jlFlSfyz_Z5YGXPzbNdKZ6qBiNKrhK7sLhEBOrZee07isoD1LbVUcMaNVjmaryp_mWzpX_hmqrzonVuHyp' },
  json: true };



const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

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

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });

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
