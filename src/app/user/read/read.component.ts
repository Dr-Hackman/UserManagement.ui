import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  usersList: any;

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((res) => {
      console.log('res==>',res);

      this.usersList = res;

    });
  }

  deleteUser(userId:any){
    console.log('Deleted User, id ==> ',userId);
    this.service.deleteUser(userId).subscribe((res) => {
      console.log('res of deleted ==> ', res);
    })
  }

}
