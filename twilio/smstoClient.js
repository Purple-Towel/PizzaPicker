require('dotenv').config({silent: true})
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_NUMBER;
const calvin = process.env.Calvin
//twilio account and number in env
const client = require('twilio')(accountSid, authToken);

//function called on timeout delay
function sendmessagetoCustomer() {
  return client.messages
    .create({
    body: `Hi ${calvin},
    Thanks for ordering with Pizza Planet.
    Your order is ready for pickup`,
    from: fromPhone,
    to: calvin
  })
}


module.exports = { sendmessagetoCustomer };
