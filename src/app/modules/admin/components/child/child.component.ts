import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  languages = []
  sub: Subscription | undefined

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.sub = this.sharedService.send_data.subscribe(
      data => {
        console.log(data)
        this.languages = data
      }
    )
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}
