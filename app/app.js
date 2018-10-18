'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

var request = require("request");

// var options = { method: 'POST',
//   url: 'https://fcm.googleapis.com/fcm/send',
//   headers: 
//    { 'postman-token': '2de21482-da45-44b2-8641-9a201d77562c',
//      'cache-control': 'no-cache',
//      'content-type': 'application/json',
//      authorization: 'key=AAAA87ESbJk:APA91bE3bZqoVtdk-KB0pIvt9DboHSYqKvCuj41-QOdlQC3oIpsyJ90X70kkJVSsKDHS4lki7uuPvgl66tXrVCgv-wYdikRk7e__9xkX6WxuvP1prO4qAG2cMHB2K7nNll_Wef-P8-sZ' },
//   body: 
//    { notification: { title: 'Hello', body: 'World', icon: 'firebase-icon.png' },
//      to: 'cQpFHcbb_No:APA91bF9jYYO15dZHJW3FHqOG7SAha0xlDjDDck9wi1NMOY1lZ6eNYDpI7jlFlSfyz_Z5YGXPzbNdKZ6qBiNKrhK7sLhEBOrZee07isoD1LbVUcMaNVjmaryp_mWzpX_hmqrzonVuHyp' },
//   json: true };

  var options = { method: 'POST',
  url: 'https://api.amazon.com/messaging/registrations/amzn1.adm-registration.v3.Y29tLmFtYXpvbi5EZXZpY2VNZXNzYWdpbmcuUmVnaXN0cmF0aW9uSWRFbmNyeXB0aW9uS2V5ITEhU2YzSHpBRlR2OElERnFCaWd0YVF0dWRzSTlnRU8xQjM3MGlOVFdEVkUyVS91UjFwcklRVTRDR3JWOEtoeGlDOXcrTEd4aCtpSm9neUJDMmVPK0pBWFB1OXZqK1M5cGhndU43TEtyMFJ6QlVxaDd3MEhKNSswdlgvTWtqeDFuQTZKVUswWUFvZXZHVzFEcWdHcWdEVVZYNGNSVkcrZVVNQStBZEZkSkpJb1Jtc0Fsa2hZRnRTT0ppenR1SFo5QUtmaW44c2dnZDlxQk1HZ1RsUVZYcDhnQkR5N20yakx2ZlhZdlhZSE9aSThjblArQzJDNGRrUFJVWkVNRFN1YkVLMnB4RTYyOFN4dEdNWUhxc2pJbTdSMm1jM1pWRzJaYmkwWWxtTldBajEvbTloRXVkY2poVUVnMG4yQnJmTHBoSnF1M0NBYURqcE85Z1doOWtTM1lOY2lMaCtuNkJrRGZLRTdYaTlheHIxTndZPSEwcFNvNUE1YklySi9TTUNkUEhLN3ZnPT0/messages',
  headers: 
   { 'postman-token': '841ae4a1-a280-80f0-0de5-3c6e40cdd050',
     'cache-control': 'no-cache',
     authorization: 'Bearer Atc|MQEBIGZUnyi3jZ2zX8-9dWUHjj5O10b5vWcIEsejXpN4MqkdoBOnJwFZa9h1wovCWP_MTg_4q6gGSE48sPOaJozsy0kSqLK_y-xSSSwtJoYQjD6BnRQ-tY4Y4Nd7ZdERPmPfTu_2gsqxTCJx7uM_bsv9IEe6QuwcXwPVk2Af9EvM3RtaLmwWuCvIwkW3M68SJLfOIwtbkEQLLgWIqmQrtzVQbCRbKjYt2eAF1txqGw1HnDX7ITGAxuwdQrMtPkDDPkxk86N4Pvz9b_uqTlVlVJ8xPbHp',
     'x-amzn-accept-type': 'com.amazon.device.messaging.ADMSendResult@1.0',
     accept: 'application/json',
     'x-amzn-type-version': 'com.amazon.device.messaging.ADMMessage@1.0',
     'content-type': 'application/json' },
  body: 
   { data: { message: 'value1', timeStamp: 'value2' },
     consolidationKey: 'Some Key',
     expiresAfter: 86400 },
  json: true };

//   const Alexa = require('ask-sdk-core');

// const LaunchRequestHandler = {
//     canHandle(handlerInput) {
//         return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
//     },
//     handle(handlerInput) {
//         const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
//         console.log('Welcome to the Alexa Skills Kit, you can say hello!');
//         return handlerInput.responseBuilder
//         .speak(speechText)
//         .reprompt(speechText)
//         .withSimpleCard('Hello World', speechText)
//         .getResponse();
//     },
// };

// const HelloWorldIntentHandler = {
//     canHandle(handlerInput) {
//         return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//         && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
//     },
//     handle(handlerInput) {
//         const speechText = 'You have just unlock secret mode in Sonic! Enjoy!';

//         /* request(options, function (error, response, body) {
//         if (error) throw new Error(error);
        
//         console.log(body);
//         });*/

//         return handlerInput.responseBuilder
//         .speak(speechText)
//         .withSimpleCard('Hello World', speechText)
//         .getResponse();
//     },
// };

// const ErrorHandler = {
//   canHandle() {
//     return true;
//   },
//   handle(handlerInput, error) {
//     console.log(`Error handled: ${error.message}`);

//     return handlerInput.responseBuilder
//       .speak('Sorry, I can\'t understand the command. Please say again.')
//       .reprompt('Sorry, I can\'t understand the command. Please say again.')
//       .getResponse();
//   },
// };

// const skillBuilder = Alexa.SkillBuilders.custom();

// exports.handler = skillBuilder
//   .addRequestHandlers(
//     LaunchRequestHandler,
//     HelloWorldIntentHandler
//   )
//   .addErrorHandlers(ErrorHandler)
//   .lambda();

//   app.setHandler(exports.handler);
app.setHandler({
    'LAUNCH': function() {
        this.toIntent('HelloWorldIntent');
    },

    'HelloWorldIntent': function() {
        // request(options, function (error, response, body) {
        //     if (error) throw new Error(error);    
        //         console.log(body);
        // });
        this.customPushNotify(options);
        this.ask('Hello World! What\'s your name?', 'Please tell me your name.');
    },

    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name.value + ', nice to meet you!');
    },
});




module.exports.app = app;