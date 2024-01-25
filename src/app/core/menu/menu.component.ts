import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title: string = "BMDB NG Demo";
  menuItems: MenuItem[] = [];

  constructor(){}

  ngOnInit(): void {
    // populate menuItems with a menu item for each component
    this.menuItems = [
      new MenuItem("Movie", "/movie/list", "Movie Detail"),
      new MenuItem("Actor", "/actor/list", "Actor List")
    ];
  }

}
