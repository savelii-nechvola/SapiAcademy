import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { LecturersModalWindowComponent } from './lecturers-modal-window/lecturers-modal-window.component';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-lecturers',
    templateUrl: './lecturers.component.html',
    styleUrls: ['./lecturers.component.scss','./lecturers-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LecturersComponent implements AfterViewInit {
    theme !: Observable<boolean>
    lecturers !: LecturerItem[]
    @ViewChild('carousel') carousel!:NgbCarousel
    posIni: any;


    constructor(private stateService: StateService, private dialog: Dialog) {
        this.theme = stateService.isDark$;

        this.lecturers = [
            {
                name: "Савелій",
                surname: "Нечвола",
                midname: "Іванович",
                exp: 3,
                sex: true,
                description: "Протягом 4 років надаю експертну допомогу з математики, фізики та основ програмування. Мої заняття з кожного предмету проходять по авторському курсу, який допомагає виявити прогалини в знаннях та дає змогу учню зрозуміти предмет, а не просто зазубрити матеріал напам'ять та дає змогу розкрити прихований потенціал учня.  Програма навчання вдосконалюється з кожним проведеним уроком, що приводить до збільшення ефективності кожного окремого заняття. Під час постійного контакту з учнями мною виділяються особливості мислення кожного студента, що приводить до максимізації  продуктивності процесу навчання. Насамперед, моєю метою є навчити учнів мислити логічно, адже вивчення цих предметів полягає в спроможності дитини підлаштуватися під всі завдання, які можуть зустрітися в майбутньому.",
                courses: ["Математика","Фізика", "Програмування"],
                certificate: [
                    {
                        name: "Digital Ukraine. UX/UI Development (Bachelor)",
                        year: "2023",
                        image: ["../../../assets/Lecturers/Certificates/Nechvola/first-1.jpg","../../../assets/Lecturers/Certificates/Nechvola/first-2.jpg"]
                    },
                    {
                        name: "Digital Ukraine. Technologies of high-perfomance computing (Bachelor)",
                        year: "2022",
                        image: ["../../../assets/Lecturers/Certificates/Nechvola/second-1.jpg","../../../assets/Lecturers/Certificates/Nechvola/second-2.jpg"]
                    },
                    
                ],
                image: "../../../assets/Lecturers/Savelii.jpg",
                isOpenCert: false
            },
            {
                name: "Кирило",
                surname: "Коляда",
                midname: "Дмитрович",
                exp: 5,
                sex: true,
                description: "Протягом 5 років допомагаю учням у розумінні, а не 'зазубрюванні' хімії, біології та математики. Заняття проходять за персональною програмою, яка враховує індивідуальні побажання та особливості кожного учня. Під час занять Ви не побачите 'стандартне вичитування' матеріалу зі слайдів! Програма побудована навколо спілкування з учнем, що дозволяє ефективніше виявити 'прогалини' та виправити їх. Завдяки цьому досягаються найвищі результати!",
                courses: ["Хімія","Біологія","Математика"],
                certificate: [
                    {
                        name: "Public communication in science",
                        year: "2020",
                        image: ["../../../assets/Lecturers/Certificates/Kolyada/1.jpg"]
                    },
                    {
                        name: "The current state of development of world science",
                        year: "2021",
                        image: ["../../../assets/Lecturers/Certificates/Kolyada/2.jpg"]
                    },{
                        name: "Tendenze attuali della moderna ricerca scientifica",
                        year: "2020",
                        image: ["../../../assets/Lecturers/Certificates/Kolyada/3.jpg"]
                    }
                ],
                image: "../../../assets/Lecturers/Kolyada.jpg",
                isOpenCert: false
            },
            {
                name: "Олена",
                surname: "Лактіонова",
                midname: "Ігорівна",
                exp: 5,
                sex: false,
                description: "У своїх заняттях я роблю ухил на практику і розуміння предмета.  Самі заняття проходять у легкій та доступній формі. Початковий рівень знань - не має значення. Індивідуальний підхід до кожного учня. Систематичне повторення і закріплення матеріалу. Після кожного заняття Ви отримаєте конспект по темі уроку у електронному форматі. Допомагаю як просто підтягнути оцінки з предметів, так і підготуватись до НМТ/ЗНО. Чекаю Вас на своїх заняттях.",
                courses: ["Хімія","Біологія"],
                certificate: [
                    {
                        name: "Formation of innovative potential of world science",
                        year: "2021",
                        image: ["../../../assets/Lecturers/Certificates/Laktionova/1.jpg"]
                    },
                    {
                        name: "Public communication in science",
                        year: "2020",
                        image: ["../../../assets/Lecturers/Certificates/Laktionova/2.jpg"]
                    },
                    {
                        name: "Theoretical and empirical scientific research",
                        year: "2023",
                        image: ["../../../assets/Lecturers/Certificates/Laktionova/3.jpg"]
                    }
                ],
                image: "../../../assets/Lecturers/Laktionova.jpg",
                isOpenCert: false
            }
        ];

    }

    move(pos:number) {
      const offset = this.posIni - pos;
      if (offset < -100) this.carousel.prev()
  
      if (offset > 100) this.carousel.next();
    }
    OpenCloseCert(lect: LecturerItem): void {
        lect.isOpenCert = !lect.isOpenCert
    }

    OpenCertificate(certificate: Certificate) {
        this.dialog.open(LecturersModalWindowComponent, { data: certificate.image, minWidth: '300px' })
    }

    ngAfterViewInit(): void {
        this.stateService.isDark$.subscribe(y => {
            let LeftArrow = document.querySelectorAll(".carousel-control-prev-icon")[0];
            let RightArrow = document.querySelectorAll(".carousel-control-next-icon")[0];
            if (y) {
                RightArrow.classList.add("carousel-control-next-icon-dark");
                LeftArrow.classList.add("carousel-control-prev-icon-dark");
            }
            else {
                RightArrow.classList.remove("carousel-control-next-icon-dark");
                LeftArrow.classList.remove("carousel-control-prev-icon-dark")
            }
        })
    }


}

export interface LecturerItem {
    name: string;
    surname: string;
    midname: string;
    exp: number;
    sex: boolean;
    description: string;
    courses: string[];
    certificate: Certificate[];
    image: string;
    isOpenCert: boolean;
}

export interface Certificate {
    name: string;
    year: string;
    image: string[];
}