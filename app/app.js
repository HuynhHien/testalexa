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



app.setHandler({
    'LAUNCH': function() {
        this.toIntent('HelloWorldIntent');
    },

    'HelloWorldIntent': function() {
        request(options, function (error, response, body) {
            if (error) throw new Error(error);    
                console.log(body);
        });
        this.ask('Hello World! What\'s your name?', 'Please tell me your name.');
    },

    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name.value + ', nice to meet you!');
    },
});

module.exports.app = app;