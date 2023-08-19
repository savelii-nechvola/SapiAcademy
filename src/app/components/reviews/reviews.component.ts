import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  theme !: Observable<boolean>
  ReviewsList !: ReviewItem[]
  constructor(private stateService : StateService){
    this.theme = stateService.isDark$;
    this.ReviewsList = [
      {
        rate:4.5,
        comment:"Lorem ipsum dolor sit amet. Est ipsam voluptatibus ut culpa similique in rerum blanditiis qui harum voluptates? "
      },
      {
        rate:5,
        comment:"Lorem ipsum dolor sit amet. Est ipsam voluptatibus ut culpa similique in rerum blanditiis qui harum voluptates? "
      },
      {
        rate:5,
        comment:"Lorem ipsum dolor sit amet. Est ipsam voluptatibus ut culpa similique in rerum blanditiis qui harum voluptates? "
      },
      {
        rate:5,
        comment:"Lorem ipsum dolor sit amet. Est ipsam voluptatibus ut culpa similique in rerum blanditiis qui harum voluptates? "
      },
      {
        rate:5,
        comment:"Lorem ipsum dolor sit amet. Est ipsam voluptatibus ut culpa similique in rerum blanditiis qui harum voluptates? "
      },
      {
        rate:5,
        comment:"Lorem ipsum dolor sit amet. Est ipsam voluptatibus ut culpa similique in rerum blanditiis qui harum voluptates? "
      },
    ]
  }
}

export interface ReviewItem{
  rate : number;
  comment : string;
}