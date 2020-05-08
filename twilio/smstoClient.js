require('dotenv').config({silent: true})
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_NUMBER;
const calvin = process.env.Calvin
//twilio account and number in env
const client = require('twilio')(accountSid, authToken);

//function called on timeout delay
function smstoClient() {
  return client.messages
    .create({
    body: `Hi Papa John,
    Thanks for ordering with Pizza Planet.
    Your order is ready for pickup`,
    from: fromPhone,
    to: calvin
  })
}

function smstoclientInitial(data) {
  return client.messages
    .create({
    body: `Hi Papa John ,
    Thanks for ordering with Pizza Planet.
    We have recieved your order and it will be completed in ${data} minutes.`,
    from: fromPhone,
    to: calvin
  })
}


module.exports = { smstoClient, smstoclientInitial };
