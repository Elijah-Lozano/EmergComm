require('dotenv').config();
require('express')
app = express();


      

app.get('/',(res,req)=>{
    sendSms()
    res.send('Hello World')
})

function sendSms(){
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+18653831467', to: '+personalNumbereHERE'})
      .then(message => console.log(message.sid));
}

app.listen(3000)
    
