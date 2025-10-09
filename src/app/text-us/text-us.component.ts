import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-text-us',
  standalone: true, // ✅ Ensure this is a standalone component
  imports: [CommonModule], // ✅ Include CommonModule here
  templateUrl: './text-us.component.html',
})
export class TextUsComponent {
  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
