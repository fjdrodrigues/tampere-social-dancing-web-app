import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'other-dance',
  templateUrl: './other-dance.component.html',
  styleUrls: ['./other-dance.component.css']
})
export class OtherDanceComponent {
  dominicanFlag = environment.dominicanFlag;
  cubanFlag = environment.cubanFlag;
  angolanFlag = environment.angolanFlag;
  capeverdeanFlag = environment.capeverdeanFlag;
  haitianFlag = environment.haitianFlag;
	
  constructor() {
  }
	
}
