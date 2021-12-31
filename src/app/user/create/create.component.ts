import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  errorMessage : any;
  successMessage : any;

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'firstName' : new FormControl('',Validators.required),
    'lastName' : new FormControl('',Validators.required),
    'email' : new FormControl('',Validators.required)
  });

  userCreate(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createUser(this.userForm.value).subscribe((res) => {
        console.log('res ==> ', res);
        this.successMessage = 'User Created with success';
        this.userForm.reset();
      })
    }else{
      this.errorMessage = 'All fields are required';
    }
  }

}
