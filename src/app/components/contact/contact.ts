import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contacto" class="contact-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="contact-info">
              <h2 class="section-title">Contáctanos</h2>
              <p class="contact-description">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
              
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-content">
                  <h5>Dirección</h5>
                  <p>Av. Tecnología 123, Ciudad Digital</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📧</div>
                <div class="info-content">
                  <h5>Email</h5>
                  <p>contacto@techstore.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📱</div>
                <div class="info-content">
                  <h5>Teléfono</h5>
                  <p>+54 (011) 1234-5678</p>
                </div>
              </div>

              <div class="social-links">
                <a href="#" class="social-link">📘</a>
                <a href="#" class="social-link">📷</a>
                <a href="#" class="social-link">🐦</a>
                <a href="#" class="social-link">💼</a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left">
            <div class="contact-form-wrapper">
              <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="contact-form">
                <div class="mb-3">
                  <label class="form-label">Nombre Completo *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    [(ngModel)]="formData.name"
                    name="name"
                    required
                    #name="ngModel"
                    [class.is-invalid]="name.invalid && name.touched"
                    placeholder="Tu nombre">
                  <div class="invalid-feedback" *ngIf="name.invalid && name.touched">
                    El nombre es obligatorio
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Email *</label>
                  <input 
                    type="email" 
                    class="form-control"
                    [(ngModel)]="formData.email"
                    name="email"
                    required
                    email
                    #email="ngModel"
                    [class.is-invalid]="email.invalid && email.touched"
                    placeholder="tu@email.com">
                  <div class="invalid-feedback" *ngIf="email.invalid && email.touched">
                    Ingresa un email válido
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Teléfono *</label>
                  <input 
                    type="tel" 
                    class="form-control"
                    [(ngModel)]="formData.phone"
                    name="phone"
                    required
                    pattern="[0-9]{10,15}"
                    #phone="ngModel"
                    [class.is-invalid]="phone.invalid && phone.touched"
                    placeholder="1234567890">
                  <div class="invalid-feedback" *ngIf="phone.invalid && phone.touched">
                    Ingresa un teléfono válido (solo números)
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Mensaje *</label>
                  <textarea 
                    class="form-control" 
                    rows="5"
                    [(ngModel)]="formData.message"
                    name="message"
                    required
                    minlength="10"
                    #message="ngModel"
                    [class.is-invalid]="message.invalid && message.touched"
                    placeholder="Escribe tu mensaje aquí..."></textarea>
                  <div class="invalid-feedback" *ngIf="message.invalid && message.touched">
                    El mensaje debe tener al menos 10 caracteres
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="btn btn-primary-custom w-100"
                  [disabled]="contactForm.invalid || isSubmitting">
                  {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
                </button>

                <div class="alert alert-success mt-3" *ngIf="showSuccess">
                  ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
                </div>

                <div class="alert alert-danger mt-3" *ngIf="showError">
                  ❌ Error al enviar el mensaje. Por favor intenta nuevamente.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: linear-gradient(180deg, var(--light-orange) 0%, var(--white) 100%);
      padding: 80px 0;
    }

    .contact-info {
      padding: 2rem 0;
    }

    .contact-description {
      color: var(--text-gray);
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: white;
      border-radius: 15px;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .info-item:hover {
      transform: translateX(10px);
      box-shadow: 0 8px 25px rgba(255, 140, 82, 0.2);
    }

    .info-icon {
      font-size: 2rem;
      margin-right: 1.5rem;
      min-width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--primary-orange), var(--dark-orange));
      border-radius: 50%;
    }

    .info-content h5 {
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.3rem;
    }

    .info-content p {
      color: var(--text-gray);
      margin: 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .social-link {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 50%;
      font-size: 1.5rem;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .social-link:hover {
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 6px 20px rgba(255, 140, 82, 0.3);
    }

    .contact-form-wrapper {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(255, 140, 82, 0.15);
    }

    .form-label {
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }

    .form-control {
      border: 2px solid #f0f0f0;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    .form-control:focus {
      border-color: var(--primary-orange);
      box-shadow: 0 0 0 0.2rem rgba(255, 176, 136, 0.25);
    }

    .form-control.is-invalid {
      border-color: #dc3545;
    }

    .invalid-feedback {
      display: block;
      font-size: 0.875rem;
      color: #dc3545;
      margin-top: 0.25rem;
    }

    .alert {
      border-radius: 10px;
      border: none;
    }
  `]
})
export class ContactComponent implements OnInit {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => {
        AOS.default.init({
          duration: 800,
          once: true
        });
      });
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitting = true;
      this.showSuccess = false;
      this.showError = false;

      const contactData = {
        ...this.formData,
        date: new Date().toISOString(),
        id: Date.now()
      };

      this.http.post('http://localhost:3000/contacts', contactData)
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.showSuccess = true;
            this.resetForm(form);
            
            gsap.from('.alert-success', {
              duration: 0.5,
              scale: 0.8,
              opacity: 0,
              ease: 'back.out(1.7)'
            });

            setTimeout(() => {
              this.showSuccess = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Error:', error);
            this.isSubmitting = false;
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 5000);
          }
        });
    } else {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }

  resetForm(form: any) {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    form.resetForm();
  }
}