import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./templates/navbar/navbar.component";
import { SidebarComponent } from "./templates/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SidebarComponent]
})
export class AppComponent {
  title = 'clientes-app';
  
}
