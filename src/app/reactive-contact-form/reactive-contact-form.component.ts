import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'reactive-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './reactive-contact-form.component.html',
  styleUrls: ['../form.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveContactFormComponent {
  form: FormGroup;
  submitting = false;
  submitted = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = null;
    this.http.post('https://formspree.io/f/{FORM_ID}', this.form.value, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.form.reset();
      },
      error: (err) => {
        this.submitting = false;
        this.error = 'Submission failed. Please try again.';
      }
    });
  }
}
