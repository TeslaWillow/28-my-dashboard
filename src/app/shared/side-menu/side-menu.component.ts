import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: Route[] = routes
    .map( (route)=>route.children ?? [] )
    .flat()
    .filter( (route)=> route && route.path )
    .filter( (route)=> !route.path?.includes(':') );

  constructor() {}

}
