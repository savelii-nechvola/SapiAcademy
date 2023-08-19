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
        {description:"Даний курс підготовка до ЗНО та НМТ з фізики включає глибоке освоєння концепцій механіки, електромагнетизму та оптики. Розв'язання задач та вивчення формул допоможуть засвоїти матеріал та забезпечити впевненість на іспиті.", image: "../../../../assets/Courses/Physic.png", name: "Фізика", background_dark: "../../../../assets/Courses/Physic_background_dark.png", background_light: "../../../../assets/Courses/Physic_background_light.png", isDark: y },
        {description:"Курс підготовки до ЗНО та НМТ з хімії орієнтований на засвоєння основних хімічних понять, реакцій та законів. Лабораторні роботи та аналіз хімічних задач допоможуть розвинути аналітичне мислення.", image: "../../../../assets/Courses/Chemistry.png", name: "Хімія", background_dark: "../../../../assets/Courses/Chemistry_background_dark.png", background_light: "../../../../assets/Courses/Chemistry_background_light.png", isDark: y },
        {description:"Інтенсивний курс математики для ЗНО або НМТ включає вивчення алгебри, геометрії та аналізу. Розв'язання різноманітних завдань допоможе зрозуміти прикладне застосування математичних концепцій.", image: "../../../../assets/Courses/Math.png", name: "Математика", background_dark: "../../../../assets/Courses/Math_background_dark.png", background_light: "../../../../assets/Courses/Math_background_light.png", isDark: y },
        {description:"Підготовка до ЗНО та НМТ з української мови та літератури включає вивчення правил мови, аналіз літературних творів та практику письмових робіт.", image: "../../../../assets/Courses/Ukraine.png", name: "Українська мова/література", background_dark: "../../../../assets/Courses/Ukraine_background_dark.png", background_light: "../../../../assets/Courses/Ukraine_background_light.png", isDark: y },
        {description:"Курс з історії для ЗНО або НМТ охоплює періоди світової та української історії. Вивчення подій, дат та основних фігур допоможе ефективно відповісти на питання тесту.", image: "../../../../assets/Courses/History.png", name: "Історія", background_dark: "../../../../assets/Courses/History_background_dark.png", background_light: "../../../../assets/Courses/History_background_light.png", isDark: y },
        {description:"Підготовка до ЗНО чи НМТ з біології включає вивчення клітинної біології, екології, генетики та еволюції. Розуміння біологічних процесів сприятиме успішному тестуванню.", image: "../../../../assets/Courses/Biology.png", name: "Біологія", background_dark: "../../../../assets/Courses/Biology_background_dark.png", background_light: "../../../../assets/Courses/Biology_background_light.png", isDark: y },
        {description:"Основний курс програмування на прикладі мов С++ та С# допоможе освоїти ключові концепції і засоби програмування. Також курс може включати ази веб-програмування, де вивчають розробку веб-додатків з використанням HTML, CSS та JavaScript.", image: "../../../../assets/Courses/Programming.png", name: "Програмування", background_dark: "../../../../assets/Courses/Programming_background_dark.png", background_light: "../../../../assets/Courses/Programming_background_light.png", isDark: y },
        {description:"check", image: null, name: null, background_dark: "../../../../assets/Courses/Nothing_background_dark.png", background_light: "../../../../assets/Courses/Nothing_background_light.png", isDark: y }
      ]
    })
  }
}
