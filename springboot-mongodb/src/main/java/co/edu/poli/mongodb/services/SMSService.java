package co.edu.poli.mongodb.services;

import com.twilio.rest.api.v2010.account.Message;


import co.edu.poli.mongodb.model.SMS;

public interface SMSService {
	
	public Message sendSMS(SMS sms);

}