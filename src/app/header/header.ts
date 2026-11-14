import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  title = 'TaskFlow';
  canDelete = true;

  rename(): void {
    this.title = 'Mes tâches';
  }

  delete(): void {
    this.title = '';
  }
}
