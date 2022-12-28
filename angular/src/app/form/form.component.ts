import { Component, OnInit } from '@angular/core';
import { Auth,EmailAuthCredential,signInWithEmailAndPassword} from '@angular/fire/auth';

import {NavigationCancellationCode, Router} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public auth: Auth,private route: Router){


  }


  handleLogin(value: any){
    signInWithEmailAndPassword(this.auth,value.email,value.password)
    .then((response:any)=>{
      console.log(response.user)
      this.route.navigate(['/last']);
    })
    .catch((err)=>{
      alert(err.message);
    })
  }
  
  
  


ngOnInit(): void {
  }

}
