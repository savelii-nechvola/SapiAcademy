import { Component, Inject } from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog'

@Component({
  selector: 'app-lecturers-modal-window',
  templateUrl: './lecturers-modal-window.component.html',
  styleUrls: ['./lecturers-modal-window.component.scss']
})
export class LecturersModalWindowComponent {
Certificate !: string[];

constructor(@Inject(DIALOG_DATA) private data : string[]){
  this.Certificate = data
}
}


