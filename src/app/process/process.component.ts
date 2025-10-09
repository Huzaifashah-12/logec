import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";

@Component({
  selector: 'app-process',
  imports: [FooterComponent, GotAProjectComponent, CommonModule, SecondaryNavbarComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
showGotAProjectModal = false;  // Keep only this one

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
  }
}
