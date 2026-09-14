import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  nom = '';
  email = '';
  message = '';
  envoye = false;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log('Formulaire envoye (simulation) :', {
      nom: this.nom,
      email: this.email,
      message: this.message
    });
    this.envoye = true;
    form.resetForm();
  }
}
