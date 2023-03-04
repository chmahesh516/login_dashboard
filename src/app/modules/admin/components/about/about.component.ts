import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public screenWidth: any;  
  public screenHeight: any;  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;  
    console.log("wi-",this.screenWidth)
    console.log("hi-",this.screenHeight)
  }

}
