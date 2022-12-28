import { Component, OnInit } from '@angular/core';
import{ 
  Auth,
  createUserWithEmailAndPassword,
  EmailAuthCredential,
  signInWithEmailAndPassword } from '@angular/fire/auth';
  import {NavigationCancellationCode, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth: Auth,private route: Router){}

  

  handleRegister(value: any){
    createUserWithEmailAndPassword(this.auth,value.email,value.password)
    .then((response:any)=>{
      console.log(response.user)
      alert("Registered Successfully");
      this.route.navigate(['/form']);
    })
    .catch((err)=>{
      alert(err.message);
    })
  }
  
  

  ngOnInit(): void {
  }

}
