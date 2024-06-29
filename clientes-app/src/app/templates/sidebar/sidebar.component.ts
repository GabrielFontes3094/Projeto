import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../service/sidebar-service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [RouterModule, CommonModule]
})
export class SidebarComponent {

    isOpen = true;  

    constructor(private sidebarService: SidebarService) {
        this.sidebarService.isOpen$.subscribe(isOpen => this.isOpen = isOpen);
    }
  
}
