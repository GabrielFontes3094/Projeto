import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./templates/navbar/navbar.component";
import { SidebarComponent } from "./templates/sidebar/sidebar.component";
import { SidebarService } from './service/sidebar-service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SidebarComponent, CommonModule]
})
export class AppComponent {
  title = 'clientes-app';
  
  isOpen = true;  

    constructor(private sidebarService: SidebarService) {
        this.sidebarService.isOpen$.subscribe(isOpen => this.isOpen = isOpen);
    }
    
}
