import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SendSmsComponent } from "./send-sms/send-sms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SendSmsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sms';
}
