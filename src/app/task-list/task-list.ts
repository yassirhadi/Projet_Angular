import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  dueDate: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.html',
  imports: [UpperCasePipe, FormsModule],
})
export class TaskList {
  tasks = signal<Task[]>([
    {id: 1, title: 't1', dueDate: '2024-06-01'},
    {id: 2, title: 't2', dueDate: '2024-06-02'}
  ]);
  newTitle = signal('');
  count = computed(() => this.tasks().length);

  add(task: Task) {
    this.tasks.update(items => [...items, task]);
  }
  
  addFromInput(): void {
    const title = this.newTitle().trim();
    if (!title) return;

    const id = this.tasks().reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;
    this.add({ id, title, dueDate: '' });
    this.newTitle.set('');
  }

  clear() {
    this.tasks.set([]);
  }
}

  

