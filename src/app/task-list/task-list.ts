import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.html',
  imports: [UpperCasePipe],
})
export class TaskList {
  tasks = [
    {id: 1, title: 't1', dueDate: '2024-06-01'},
    {id: 2, title: 't2', dueDate: '2024-06-02'},
  ];
}
