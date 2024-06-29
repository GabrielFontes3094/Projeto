// sidebar.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private isOpenSource = new BehaviorSubject<boolean>(false); 
  isOpen$ = this.isOpenSource.asObservable();

  toggle() {
    this.isOpenSource.next(!this.isOpenSource.getValue());
  }
  
}
