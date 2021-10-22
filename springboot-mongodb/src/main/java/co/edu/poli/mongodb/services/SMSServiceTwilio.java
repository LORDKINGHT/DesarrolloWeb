package co.edu.poli.mongodb.services;

import org.springframework.stereotype.Service;


import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

import co.edu.poli.mongodb.model.SMS;

@Service
public class SMSServiceTwilio implements SMSService{
	
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACf1743d3bb95d8a46646cf3df28348836";
    public static final String AUTH_TOKEN = "b875f8ba22f2f4f592dc89ff09a2e6dc";

    @Override
    public Message sendSMS(SMS sms) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Message message = Message.creator(
                new com.twilio.type.PhoneNumber(sms.getPhoneNumberTo()),
                new com.twilio.type.PhoneNumber("+13344384895"),//The Twilio phone number
                sms.getBody())
           .create();

        return message;
    }
    
}

