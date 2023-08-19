import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { LecturersModalWindowComponent } from './lecturers-modal-window/lecturers-modal-window.component';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
@Component({
    selector: 'app-lecturers',
    templateUrl: './lecturers.component.html',
    styleUrls: ['./lecturers.component.scss','./lecturers-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LecturersComponent implements AfterViewInit {
    theme !: Observable<boolean>
    lecturers !: LecturerItem[]



    constructor(private stateService: StateService, private dialog: Dialog) {
        this.theme = stateService.isDark$;

        this.lecturers = [
            {
                name: "Єгор",
                surname: "Костін",
                midname: "Романович",
                exp: 1,
                sex: true,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non purus porta, aliquam nisi eu, dapibus justo. Phasellus non pellentesque metus. Cras in est convallis, volutpat urna sit amet, sagittis odio. Aliquam erat volutpat. Vestibulum a rhoncus libero. Duis feugiat nisl ut arcu porta, non accumsan quam commodo. Aenean eget turpis eu ex facilisis placerat. Donec in laoreet tortor.",
                courses: ["Sexology"],
                certificate: [
                    {
                        name: "Technologies of High-performance Computing",
                        year: "2022",
                        image: ["../../../assets/Lecturers/Certificates/Certificate-Savelii_Nechvola_pages-to-jpg-0001.jpg","../../../assets/Lecturers/Certificates/Certificate-Savelii_Nechvola_pages-to-jpg-0002.jpg"]
                    },
                    {
                        name: "Not technologies of High-performance Computing",
                        year: "2023",
                        image: ["../../../assets/Lecturers/Certificates/Certificate-Savelii_Nechvola_pages-to-jpg-0002.jpg"]
                    }
                ],
                image: "../../../assets/Lecturers/Yehor.jpg",
                isOpenCert: false
            },
            {
                name: "Yura",
                surname: "Misher",
                midname: "Романович",
                exp: 35,
                sex: true,
                description: "Mice kent and winston",
                courses: ["Pidorasology"],
                certificate: [
                    {
                        name: "Technologies of High-performance Computing",
                        year: "2022",
                        image: ["../../../assets/Lecturers/Certificates/Yura.jpg"]
                    }
                ],
                image: "../../../assets/Lecturers/BestLecturer.jpg",
                isOpenCert: false
            },
        ];

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