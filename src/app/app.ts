import { Component, signal } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { TextUsComponent } from './text-us/text-us.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TextUsComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('logec');
  showNavbar = true; // ✅ added

  constructor(private router: Router) {
   this.router.events
  .pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  )
  .subscribe((event: NavigationEnd) => {
    const url = event.urlAfterRedirects;

    this.showNavbar = !(
      url.startsWith('/contact') ||
      url.startsWith('/work') ||
      url.startsWith('/process') ||
      url.startsWith('/career') ||
      url.startsWith('/clients') ||
      url.startsWith('/testonimals') ||
      url.startsWith('/manifesto')
    );
  });
  }
}