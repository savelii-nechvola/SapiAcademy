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
        comment:"Хочу подякувати Sapi Academy за якісну підготовку до НМТ з української мови, математики та біології. Як і хотіла, вступила до НМУ імені О.О. Богомольця, дякую!"
      },
      {
        rate:5,
        comment:"Індивідуальний підхід, за досить короткий час змогли підтягнути математику."
      },
      {
        rate:5,
        comment:"Кирило Дмитрович - гарний репетитор, виконував з ним роботу, пояснює зрозуміло, допоміг здати все в короткі терміни, головне, що все правильно!"
      },
      {
        rate:5,
        comment:"Щиро дякую за те, що в мінімальний час, який залишився до НМТ, Савелій Іванович пропрацював з донькою. Репетитор, який викладається 100% і робить все можливе і неможливе для досягнення результату."
      },
      {
        rate:5,
        comment:"Репетитори Sapi Academy - талановиті та віддані професіонали своєї справи. Вони добре володіють предметом, завжди готові допомогти та пояснити матеріал. Дякую за допомогу."
      },
      {
        rate:5,
        comment:"Олена Ігорівна чудовий репетитор, за невеликий проміжок часу суттєво покращила мій рівень знань з хімії, змістовні уроки і зрозуміла подача матеріалу."
      },
    ]
  }
}

export interface ReviewItem{
  rate : number;
  comment : string;
}