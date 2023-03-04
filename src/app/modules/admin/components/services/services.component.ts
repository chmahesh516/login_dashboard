import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  //// input decorator
  isChecked = false;
///// viewchild decorator
  dataFromChild!: string;
  @ViewChild(ContactComponent, { static: false })
  child!: { data: string; };
  ngAfterViewInit() {
    this.dataFromChild = this.child.data;
  }
  //// output decorator
  id!: number;
  constructor() { }

  ngOnInit(): void {
  }
  onselection(id: number) {
    this.id = id;
}
}
