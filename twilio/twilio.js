const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const fromPhone = process.env.TWILIO_NUMBER;
//twilio account and number in env
const client = require('twilio')(accountSid, authToken);

function sendMessage(messageData) {
  return client.messages.create({
    body: `Hi ${messageData.body.userName},
    Thanks for ordering with Pizza Planet.
    Your food is ready for pickup`,
    from: fromPhone,
    to: `${messageData.body.sendText}`
  })
}

module.exports = { sendMessage };
