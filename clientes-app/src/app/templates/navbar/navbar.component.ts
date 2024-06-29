import { Component } from '@angular/core';
import { SidebarService } from '../../service/sidebar-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = true; 

  constructor(private sidebarService: SidebarService) { }

  toggleSidebar() {
    this.isOpen = !this.isOpen; 
    this.sidebarService.toggle(); 
  }
  
}
