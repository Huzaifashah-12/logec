import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component"; // <-- Required for *ngIf and *ngFor

@Component({
  selector: 'app-work',
  imports: [FooterComponent, CommonModule, SecondaryNavbarComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})export class WorkComponent {
  services: string[] = [
    'All Services',
    'App Development',
    'Web Development',
    'Blockchain Development',
    'Game Development',
  ];
  categories: string[] = ['All Categories', 'Healthcare', 'Education', 'Finance'];
  technologies: string[] = ['All Technologies', 'React', 'Flutter', 'Node.js', 'Angular'];

  selectedService = this.services[0];
  selectedCategory = this.categories[0];
  selectedTechnology = this.technologies[0];

  dropdownOpen: {
    services: boolean;
    categories: boolean;
    technologies: boolean;
  } = {
    services: false,
    categories: false,
    technologies: false,
  };

  // ✅ Modal state variable
  gotAProjectModalOpen = false;

  // ✅ The missing method
  toggleGotAProjectModal() {
    this.gotAProjectModalOpen = !this.gotAProjectModalOpen;
  }

  toggleDropdown(type: 'services' | 'categories' | 'technologies') {
    this.dropdownOpen = {
      services: false,
      categories: false,
      technologies: false,
      [type]: !this.dropdownOpen[type],
    };
  }

  selectOption(type: 'services' | 'categories' | 'technologies', value: string) {
    if (type === 'services') this.selectedService = value;
    if (type === 'categories') this.selectedCategory = value;
    if (type === 'technologies') this.selectedTechnology = value;

    this.dropdownOpen[type] = false;
  }
}
