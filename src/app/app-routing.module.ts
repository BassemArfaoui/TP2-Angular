import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangecolorComponent } from './test-component/changecolor/changecolor.component';
import { CarteComponent } from './carte-visite/carte/carte.component';
import { CvComponent } from './embauche/cv/cv.component';
import { DetailComponent } from './embauche/detail/detail.component';
import { CdDetailComponent } from './embauche/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: "test-component/:color", component: ChangecolorComponent },
  { path: 'test-component', redirectTo: 'test-component/grey' },
  { path: "carte-visite", component: CarteComponent },
  { path: "embauche", component: CvComponent },
  { path: "embauche/:id", component: CdDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "images", component: ImagesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
