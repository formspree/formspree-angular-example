import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'templated-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './templated-contact-form.component.html',
  styleUrls: ['../form.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplatedContactFormComponent {
  email = '';
  message = '';
  submitting = false;
  submitted = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.email) {
      return;
    }
    
    this.submitting = true;
    this.error = null;
    
    this.http.post('https://formspree.io/f/{FORM_ID}', {
      email: this.email,
      message: this.message
    }, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        this.submitting = false;
        this.error = 'Submission failed. Please try again.';
      }
    });
  }
}
