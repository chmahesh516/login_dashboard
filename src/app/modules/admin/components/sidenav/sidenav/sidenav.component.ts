import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/services/nav-item.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  menu:NavItem[] =[];
  // 
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  ngOnInit(): void {
    this.menu = [
      //// admin screens
        {
          displayName: 'Admin',
          iconName: 'store_mall_directory',
          children: [
            {
              displayName: 'Home',
              iconName: 'how_to_reg',
              route: './home'
            },
            {
              displayName: 'About',
              iconName: 'how_to_reg',
              route: './about'
            },
            {
              displayName: 'Services',
              iconName: 'how_to_reg',
              route: './services'
            },
          ]
        },
        {
          displayName: 'Settings',
          iconName: 'store_mall_directory',
          children: [
           {
              displayName: 'Contact',
              iconName: 'how_to_reg',
              route: './contact'
            },
            {
              displayName: 'Parent',
              iconName: 'how_to_reg',
              route: './parent'
            },
            {
              displayName: 'Child',
              iconName: 'how_to_reg',
              route: './child'
            },
         ]
        },
      ];
  }

}
