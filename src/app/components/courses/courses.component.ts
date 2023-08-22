import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { CoursesItem } from './courses-item/courses-item.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  theme !: Observable<boolean>
  courses !: CoursesItem[]
  constructor(private stateService: StateService) {
    this.theme = stateService.isDark$;
    this.theme.subscribe(y => {
      this.courses = [
        {description:"Закони природи у дії. Енергія, рух та таємниці Всесвіту розкриваються через експеримент та думку.", image: "../../../../assets/Courses/Physic.png", name: "Фізика", background_dark: "../../../../assets/Courses/Physic_background_dark.png", background_light: "../../../../assets/Courses/Physic_background_light.png", isDark: y },
        {description:"Розкриває молекулярні та хімічні таємниці навколишнього світу. Експериментуй, розумій і твори!", image: "../../../../assets/Courses/Chemistry.png", name: "Хімія", background_dark: "../../../../assets/Courses/Chemistry_background_dark.png", background_light: "../../../../assets/Courses/Chemistry_background_light.png", isDark: y },
        {description:"Таємниці чисел, геометрія простору, логіка розв'язків. Відкривай світ точних можливостей!", image: "../../../../assets/Courses/Math.png", name: "Математика", background_dark: "../../../../assets/Courses/Math_background_dark.png", background_light: "../../../../assets/Courses/Math_background_light.png", isDark: y },
        {description:"Музика слів, таємниці граматики, віконце до нашої ідентичності. Вивчай та вражай!", image: "../../../../assets/Courses/Ukraine.png", name: "Українська мова/література", background_dark: "../../../../assets/Courses/Ukraine_background_dark.png", background_light: "../../../../assets/Courses/Ukraine_background_light.png", isDark: y },
        {description:"Ключ до минулого, вікно в пригоди, мудрість минулі епохи — відкривай світ часу.", image: "../../../../assets/Courses/History.png", name: "Історія", background_dark: "../../../../assets/Courses/History_background_dark.png", background_light: "../../../../assets/Courses/History_background_light.png", isDark: y },
        {description:"Розкриває чарівний світ організмів, їх адаптацію, еволюцію. Вивчай життя в усій його красі та складності!", image: "../../../../assets/Courses/Biology.png", name: "Біологія", background_dark: "../../../../assets/Courses/Biology_background_dark.png", background_light: "../../../../assets/Courses/Biology_background_light.png", isDark: y },
        {description:"Творчість у коді, від ідей до віртуальних реальностей. Розвивай логіку, твори інновації, формуй майбутнє.", image: "../../../../assets/Courses/Programming.png", name: "Програмування", background_dark: "../../../../assets/Courses/Programming_background_dark.png", background_light: "../../../../assets/Courses/Programming_background_light.png", isDark: y },
        {description:"check", image: null, name: null, background_dark: "../../../../assets/Courses/Nothing_background_dark.png", background_light: "../../../../assets/Courses/Nothing_background_light.png", isDark: y }
      ]
    })
  }
}
