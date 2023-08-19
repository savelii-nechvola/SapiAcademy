import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MailSenderService } from 'src/app/services/mail-sender.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent {
  theme !: Observable<boolean>
  orderForm: FormGroup;
  subjects = ['Physic', 'Chemistry', 'Biology', 'Ukrainian', 'Math', 'Programming', 'History'];
  subjectNames: SubjectNames = {
    'Physic': 'Фізика',
    'Chemistry': 'Хімія',
    'Biology': 'Біологія',
    'Ukrainian': 'Українська мова',
    'Math': 'Математика',
    'Programming': 'Програмування',
    'History': 'Історія'
  };
  formSubmitted = false;
  constructor(private formBuilder: FormBuilder, private stateService : StateService, private mailSender : MailSenderService){
    this.theme = stateService.isDark$;
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.pattern(/^\+(?![7])\d{10,}$/g)]],
      comment: '',
      Physic: false,
      Chemistry: false,
      Biology: false,
      Ukrainian: false,
      Math: false,
      Programming: false,
      History: false,
      dontCallMe: false,
    }, {
      validators: [
        this.atLeastOneRequired('email', 'phone'),
        this.atLeastOneSubjectSelected()
      ]
    });
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.orderForm.valid) {
      this.mailSender.SendTelegram(this.CreateMessage());
    } 
  }
  CreateMessage() : string{
    const message = `${this.orderForm.controls['surname'].value} ${this.orderForm.controls['name'].value}
Пошта: ${this.orderForm.controls['email'].value}
Телефон: ${this.orderForm.controls['phone'].value}
Предмети: \n${this.orderForm.controls['Physic'].value == true ? "\n\t\t\tФізика" : ""}${this.orderForm.controls['Chemistry'].value == true ? "\n\t\t\tХімія" : ""}${this.orderForm.controls['Biology'].value == true ? "\n\t\t\tБіологія" : ""} ${this.orderForm.controls['Ukrainian'].value == true ? "\n\t\t\tУкраїнська мова/література" : ""} ${this.orderForm.controls['Math'].value == true ? "\n\t\t\tМатематика" : ""} ${this.orderForm.controls['Programming'].value == true ? "\n\t\t\tПрограмування" : ""} ${this.orderForm.controls['History'].value == true ? "\n\t\t\tІсторія" : ""}\n
Коментар: ${this.orderForm.controls['comment'].value}
${this.orderForm.controls['dontCallMe'].value == true ? "НЕ ДЗВОНИ." : "Можна дзвонити"}`
    return message;
  };

  private atLeastOneRequired(field1: string, field2: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value1 = control.get(field1)?.value;
      const value2 = control.get(field2)?.value;
      
      if (!value1 && !value2) {
        return { atLeastOneRequired: true };
      }
      return null;
    };
  }

  private atLeastOneSubjectSelected(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const selectedSubjects = this.subjects.filter(subject => control.get(subject)?.value);
      if (selectedSubjects.length === 0) {
        return { atLeastOneRequiredSubjects: true };
      }
      return null;
    }
  }
}


interface SubjectNames {
  [key: string]: string;
}