import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  theme !: Observable<boolean>
  CurrentYear : number = new Date().getFullYear()
  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
  }

}
