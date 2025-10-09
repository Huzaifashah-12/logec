import { Component } from '@angular/core';
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-secondary-navbar',
  standalone: true,
  imports: [GotAProjectComponent, CommonModule, RouterLink],
  templateUrl: './secondary-navbar.component.html',
  styleUrl: './secondary-navbar.component.css'
})
export class SecondaryNavbarComponent {
  // Mobile menu toggle
  menuOpen = false;

  // Modal toggle
  showGetInTouchModal = false;

  // Dropdown states
  isCompanyOpen = false;
  isServicesOpen = false;
  isIndustriesOpen = false;

  // Toggle mobile menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Toggle modal
  toggleGetInTouchModal() {
    this.showGetInTouchModal = !this.showGetInTouchModal;
  }

  // Toggle Company dropdown
  toggleCompany(event: Event) {
    event.preventDefault();
    this.isCompanyOpen = !this.isCompanyOpen;
    this.isServicesOpen = false;
    this.isIndustriesOpen = false;
  }

  // Toggle Services dropdown
  toggleServices(event: Event) {
    event.preventDefault();
    this.isServicesOpen = !this.isServicesOpen;
    this.isCompanyOpen = false;
    this.isIndustriesOpen = false;
  }

  // Toggle Industries dropdown
  toggleIndustries(event: Event) {
    event.preventDefault();
    this.isIndustriesOpen = !this.isIndustriesOpen;
    this.isCompanyOpen = false;
    this.isServicesOpen = false;
  }
}
