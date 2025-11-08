import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule, RouterLink, GotAProjectComponent],
  styleUrls: ['./navbar.component.css']
})export class NavbarComponent {
    hideNavbar = false; // ✅ NEW

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideNavbar = event.url === '/our-team'; // ✅ Hide on this route
      }
    });
  }
  scrolled = false;
  menuOpen = false;
  showStickyWhiteNavbar = false;

  showGetInTouchModal = false;

  // dropdown states
  isCompanyOpen = false;
  isServicesOpen = false;
  isIndustriesOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;

    this.scrolled = scrollY > heroHeight;
    this.showStickyWhiteNavbar = scrollY > 0 && scrollY < heroHeight;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleGetInTouchModal() {
    this.showGetInTouchModal = !this.showGetInTouchModal;
  }

  toggleCompany(event: Event) {
    event.preventDefault();
    this.isCompanyOpen = !this.isCompanyOpen;
    this.isServicesOpen = false;
    this.isIndustriesOpen = false;
  }

  toggleServices(event: Event) {
    event.preventDefault();
    this.isServicesOpen = !this.isServicesOpen;
    this.isCompanyOpen = false;
    this.isIndustriesOpen = false;
  }

  toggleIndustries(event: Event) {
    event.preventDefault();
    this.isIndustriesOpen = !this.isIndustriesOpen;
    this.isCompanyOpen = false;
    this.isServicesOpen = false;
  }
}
