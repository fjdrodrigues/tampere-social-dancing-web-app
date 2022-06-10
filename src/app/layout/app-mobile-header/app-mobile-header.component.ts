import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './app-mobile-header.component.html',
  styleUrls: ['./app-mobile-header.component.css']
})
export class AppMobileHeaderComponent {
  whatsappGroup = environment.whatsappGroup;

  constructor() {}

}
