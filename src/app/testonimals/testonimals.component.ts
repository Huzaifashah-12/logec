import { Component } from '@angular/core';
import { GotAProjectComponent } from "../got-a-project/got-a-project.component";
import { FooterComponent } from "../footer/footer.component";
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testonimals',
  imports: [GotAProjectComponent, FooterComponent, SecondaryNavbarComponent, CommonModule],
  templateUrl: './testonimals.component.html',
  styleUrl: './testonimals.component.css'
})
export class TestonimalsComponent {

showGotAProjectModal = false;  // Keep only this one

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
  }
}
