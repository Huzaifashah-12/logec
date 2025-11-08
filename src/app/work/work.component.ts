import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";

@Component({
  selector: 'app-work',
  standalone: true, // ✅ add if using Angular standalone components
  imports: [FooterComponent, CommonModule, SecondaryNavbarComponent, GotAProjectComponent],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'] // ✅ should be styleUrls, not styleUrl
})
export class WorkComponent {
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

  dropdownOpen = {
    services: false,
    categories: false,
    technologies: false,
  };

  // ✅ Modal toggle state (this is what *ngIf uses)
  showGotAProjectModal = false;

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
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
