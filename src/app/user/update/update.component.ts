import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errorMessage : any;
  successMessage : any;
  getUserId : any;

  ngOnInit(): void {
    this.getUserId = this.router.snapshot.paramMap.get('userId');
    this.service.getUser(this.getUserId).subscribe((res) =>{
      console.log(res);
      this.userForm.patchValue({
        'firstName' : res.firstName,
        'lastName' : res.lastName,
        'email' : res.email
      })
    })
  }

  userForm = new FormGroup({
    'firstName' : new FormControl('',Validators.required),
    'lastName' : new FormControl('',Validators.required),
    'email' : new FormControl('',Validators.required)
  });

  userUpdate(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.updateUser(this.getUserId,this.userForm.value).subscribe((res) => {
        console.log('res ==> ', res);
        this.successMessage = 'User Updated with success';
      })
    }else{
      this.errorMessage = 'All fields are required';
    }
  }
}
