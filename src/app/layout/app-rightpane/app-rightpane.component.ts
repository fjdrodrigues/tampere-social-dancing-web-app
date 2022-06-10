import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rightpane',
  templateUrl: './app-rightpane.component.html',
  styleUrls: ['./app-rightpane.component.css']
})
export class AppRightPaneComponent {
  whatsappGroup = environment.whatsappGroup;
  facebookPage = environment.facebookPage;

  constructor() {}

}
