import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-to-start',
  templateUrl: './to-start.component.html',
  styleUrls: ['./to-start.component.scss']
})
export class ToStartComponent {
  theme !: Observable<boolean>

  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
  }


}
