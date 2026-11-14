import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Header, HomePage, AboutPage, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
