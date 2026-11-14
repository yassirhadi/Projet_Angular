import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render, rename, and clear the title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = (fixture.nativeElement as HTMLElement).querySelector('app-header')!;
    expect(compiled.querySelector('h1')?.textContent).toBe('TaskFlow');

    compiled.querySelector('button')!.click();
    await fixture.whenStable();

    expect(compiled.querySelector('h1')?.textContent).toBe('Mes tâches');

    compiled.querySelectorAll('button')[1].click();
    await fixture.whenStable();

    expect(compiled.querySelector('h1')?.textContent).toBe('');
  });
});
