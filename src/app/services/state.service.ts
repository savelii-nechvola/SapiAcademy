import { Injectable } from '@angular/core';
import { ReplaySubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private isDark = new ReplaySubject<boolean>();
  isDark$ = this.isDark.asObservable();
  theme !: boolean
  constructor() 
  { 
    const CurTheme = localStorage.getItem("theme")?.toLowerCase();
    if(CurTheme == "true" || CurTheme == null || CurTheme === undefined){
      this.isDark.next(true)
    }
    else this.isDark.next(false);

    this.isDark$.subscribe(y=>{
      this.theme = y
    })
  }

  async changeTheme(){
    const newTheme = !this.theme
    this.isDark.next(newTheme);
    localStorage.setItem("theme",(newTheme).toString());
  }
}
