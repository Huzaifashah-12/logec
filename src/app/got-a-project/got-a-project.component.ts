import { Component, EventEmitter, Output } from '@angular/core'; // ✅ Make sure Output is imported!
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-got-a-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './got-a-project.component.html',
  styleUrls: ['./got-a-project.component.css']
})
export class GotAProjectComponent {
  @Output() close = new EventEmitter<void>(); // ✅ This is the missing piece

  form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.form);
    // TODO: connect to backend or service
  }

  closeModal() {
    this.close.emit(); // ✅ Emit the event to notify the parent
  }
}
