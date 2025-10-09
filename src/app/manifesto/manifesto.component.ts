import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manifesto',
  imports: [FooterComponent, GotAProjectComponent, SecondaryNavbarComponent, CommonModule],
  templateUrl: './manifesto.component.html',
  styleUrl: './manifesto.component.css'
})
export class ManifestoComponent {
showGotAProjectModal = false;  // Keep only this one

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
  }
}
