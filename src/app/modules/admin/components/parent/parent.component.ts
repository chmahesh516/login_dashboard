import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private router: Router,private sharedService:SharedServiceService) { }
  
  languages = ['Java', 'Python', 'JavaScript', 'Go']

  ngOnInit() {
  }

  sendData() {
    this.sharedService.send_data.next(this.languages)
  }
  export() {
  this.router.navigate(['/admin/child']);
  }
  
}
