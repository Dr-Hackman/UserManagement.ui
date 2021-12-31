import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  getUserId : any;
  user : any;

  ngOnInit(): void {
    this.getUserId = this.router.snapshot.paramMap.get('userId');
    this.service.getUser(this.getUserId).subscribe((res) =>{
      console.log(res);
      this.user = res;
    })
  }

}
