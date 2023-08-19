import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  @Input() coursesItem !: CoursesItem;
  darkBack !: string;
  lightBack !: string;

  constructor(){
    
  }
  ngOnInit(): void {
    if(!!this.coursesItem)
    {
    this.darkBack = "no-repeat center url("+this.coursesItem.background_dark+")";
    this.lightBack = "no-repeat center url("+this.coursesItem.background_light+")";
    }
  }
}


export interface CoursesItem{
  image : string | null;
  name : string | null;
  background_dark : string;
  background_light : string;
  description : string;
  isDark : boolean;
}