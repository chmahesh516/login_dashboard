import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
