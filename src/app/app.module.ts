import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesItemComponent } from './components/courses/courses-item/courses-item.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LecturersModalWindowComponent } from './components/lecturers/lecturers-modal-window/lecturers-modal-window.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToStartComponent } from './components/to-start/to-start.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceInfoComponent } from './components/price-info/price-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutUsComponent,
    CoursesComponent,
    CoursesItemComponent,
    LecturersComponent,
    LecturersModalWindowComponent,
    ReviewsComponent,
    FormOrderComponent,
    ToStartComponent,
    FooterComponent,
    PriceInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgbCarouselModule,
    DialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
