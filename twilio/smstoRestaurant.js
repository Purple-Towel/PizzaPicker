require('dotenv').config({silent: true})
const accountSid = process.env.TWILIO_ACCOUNT_SID2;
const authToken = process.env.TWILIO_AUTH_TOKEN2;
const fromPhone = process.env.TWILIO_NUMBER2;
const calvin = process.env.Calvin
//twilio account and number in env
const client = require('twilio')(accountSid, authToken);

//function called on click
function sendmessagetoRestaurant() {
  return client.messages
    .create({
    body: `TO RESTAURANT: Order has been placed`,
    from: fromPhone,
    to: calvin
  })
}

module.exports = { sendmessagetoRestaurant };
