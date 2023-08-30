import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.scss']
})
export class PriceInfoComponent {
  theme !: Observable<boolean>
  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
  }
}
