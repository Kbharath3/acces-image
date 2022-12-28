import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LastComponent } from './last/last.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    
    path:'',
    component:HeaderComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'form',
        component:FormComponent
      },
      {
        path:'last',
        component:LastComponent
      },
      {
        path:'Signup',
        component:SignupComponent
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
