import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-sms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './send-sms.component.html',
  styleUrl: './send-sms.component.css'
})
export class SendSmsComponent {

  smsGroup!: FormGroup


  sendSMS(){

  }

}
