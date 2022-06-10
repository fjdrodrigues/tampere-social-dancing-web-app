import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  callPhoneNumber = environment.callPhoneNumber;
  whatsappSendMessage = environment.whatsappSendMessage;
  telegramLink = environment.telegramLink;
  phoneNumber = environment.phoneNumber;
  sendEmail = environment.sendEmail;
  email = environment.email;
  addressPlaceName = environment.addressPlaceName;
  addressStreetAndNumber = environment.addressStreetAndNumber;
  addressPostalCode = environment.addressPostalCode;
  addressCity = environment.addressCity;
  googleMapsLink = environment.googleMapsLink;

	
  constructor() {
  }
	
}