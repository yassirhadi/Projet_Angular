
import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';

@Component({
  selector: 'app-root',
  imports: [HomePage, AboutPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
