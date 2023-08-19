import { Component } from '@angular/core';
import { StateService } from './services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SapiAcademy_0.1';

  theme !: Observable<boolean>

  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
  }


}
