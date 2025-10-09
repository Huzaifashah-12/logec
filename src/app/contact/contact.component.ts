import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { GotAProjectComponent } from '../got-a-project/got-a-project.component';
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [FooterComponent, CommonModule, GotAProjectComponent, SecondaryNavbarComponent, ]
})
export class ContactComponent {
showGotAProjectModal = false;  // Keep only this one

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
  }

}
