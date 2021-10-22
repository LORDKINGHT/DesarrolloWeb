package co.edu.poli.mongodb.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.rest.api.v2010.account.Message;

import co.edu.poli.mongodb.model.SMS;
import co.edu.poli.mongodb.services.SMSService;

@RestController
public class SMSController {

	@Autowired
	private SMSService smsService;

	@PostMapping("/api/v1/SMS")
	public Message sendSMS(@RequestBody SMS sms) {
		return smsService.sendSMS(sms);
	}

}