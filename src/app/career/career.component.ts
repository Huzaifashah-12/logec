import { Component } from '@angular/core';
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";
import { FooterComponent } from "../footer/footer.component";
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career',
  imports: [GotAProjectComponent, FooterComponent, SecondaryNavbarComponent, CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
showGotAProjectModal = false;  // Keep only this one

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
  }
}
