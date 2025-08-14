import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  registerForm!: FormGroup;
  send: boolean = false;

  email = '';
  password = '';
  errorMessage = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({

        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit(): void {
    console.log(this.registerForm.value);
    console.log('User registered');

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.log('Form is invalid');
      return;
    }
    this.send = true;
  }
  
    getControl(field: string) {
      return this.registerForm.get(field);
    }

  hasAnError(field: string): boolean {
    const control = this.getControl(field);
    return !!(control?.invalid && (control.dirty || control.touched));
  }

  getMessageError(field: string): string {
    const control = this.getControl(field);

    if (control?.hasError('required')) {
      return `This ${field} is required.`;
    }
    if (control?.hasError('email')) {
      return `Incorrect email`;
    }
    return '';
  }
}
