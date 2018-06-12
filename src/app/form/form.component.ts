import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  user ={
   name : '',
    email: '',
    password: '',
     mobile:''
  }

   onSubmit (value:any)
   {
    this.user.name=value.name;
    this.user.password=value.password;
    this.user.mobile=value.mobile;
    console.log(this.user);
  }
}