import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registrationForm: NgForm) {;
    if(registrationForm.status == "INVALID") {
      alert("Invalid username");
      return;
    } 
    localStorage.setItem('user', registrationForm.value.username);
    this.router.navigate(['calculation']);
  }

}
