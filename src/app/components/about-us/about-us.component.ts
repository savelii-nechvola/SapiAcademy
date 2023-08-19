import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  theme !: Observable<boolean>

  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
  }
}
