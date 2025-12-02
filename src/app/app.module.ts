import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './embauche/cv/cv.component';
import { ListeComponent } from './embauche/liste/liste.component';
import { ItemComponent } from './embauche/item/item.component';
import { DetailComponent } from './embauche/detail/detail.component';
import { DefaultImagePipe } from './default-image.pipe';
import { ChangecolorComponent } from './test-component/changecolor/changecolor.component';
import { CarteComponent } from './carte-visite/carte/carte.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EmbaucheComponent } from './embauche/embauche/embauche.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CdDetailComponent } from './embauche/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    DefaultImagePipe,
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    ChangecolorComponent,
    CarteComponent,
    NavbarComponent,
    EmbaucheComponent,
    CdDetailComponent,
    LoginComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-top-center" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
