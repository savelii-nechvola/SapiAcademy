import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  theme !: Observable<boolean>

  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
  }


  changeTheme(){
    this.stateService.changeTheme()
  }
}
