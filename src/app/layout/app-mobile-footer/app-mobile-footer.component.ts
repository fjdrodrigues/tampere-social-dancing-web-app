import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './app-mobile-footer.component.html',
  styleUrls: ['./app-mobile-footer.component.css']
})
export class AppMobileFooterComponent {
  facebookPage = environment.facebookPage;

  constructor() {}

}
