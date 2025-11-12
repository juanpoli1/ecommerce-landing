import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sobre-nosotros" class="testimonials-section py-5">
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <h2 class="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p class="section-subtitle">Miles de clientes satisfechos en todo el mundo</p>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let testimonial of testimonials; let i = index"
               [attr.data-aos]="'flip-left'"
               [attr.data-aos-delay]="i * 100">
            <div class="testimonial-card card-hover">
              <div class="testimonial-header">
                <div class="avatar" [style.background]="testimonial.avatarColor">
                  {{testimonial.initials}}
                </div>
                <div class="testimonial-info">
                  <h5 class="testimonial-name">{{testimonial.name}}</h5>
                  <div class="testimonial-stars">
                    <span *ngFor="let star of [1,2,3,4,5]">⭐</span>
                  </div>
                </div>
              </div>
              <p class="testimonial-text">{{testimonial.text}}</p>
              <div class="testimonial-date">{{testimonial.date}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background: var(--white);
      padding: 80px 0;
    }

    .section-subtitle {
      color: var(--text-gray);
      font-size: 1.1rem;
      margin-top: 1rem;
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      height: 100%;
      border-radius: 15px;
    }

    .testimonial-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin-right: 1rem;
      box-shadow: 0 4px 15px rgba(255, 140, 82, 0.3);
    }

    .testimonial-info {
      flex: 1;
    }

    .testimonial-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.3rem;
    }

    .testimonial-stars {
      font-size: 0.9rem;
    }

    .testimonial-text {
      color: var(--text-gray);
      line-height: 1.7;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .testimonial-date {
      color: var(--text-gray);
      font-size: 0.9rem;
      opacity: 0.7;
    }
  `]
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'María González',
      initials: 'MG',
      avatarColor: 'linear-gradient(135deg, #FFB088, #FF8C52)',
      text: 'Excelente calidad y servicio. Los productos superaron mis expectativas. El proceso de compra fue muy sencillo.',
      date: 'Hace 2 días'
    },
    {
      name: 'Carlos Rodríguez',
      initials: 'CR',
      avatarColor: 'linear-gradient(135deg, #FF8C52, #FFD4B8)',
      text: 'La mejor tienda online de tecnología. Entrega rápida y productos genuinos. Totalmente recomendable.',
      date: 'Hace 1 semana'
    },
    {
      name: 'Ana Martínez',
      initials: 'AM',
      avatarColor: 'linear-gradient(135deg, #FFD4B8, #FFB088)',
      text: 'Increíble atención al cliente. Me ayudaron a elegir el producto perfecto para mis necesidades.',
      date: 'Hace 3 días'
    },
    {
      name: 'Jorge López',
      initials: 'JL',
      avatarColor: 'linear-gradient(135deg, #FFB088, #FF8C52)',
      text: 'Precios competitivos y gran variedad. He comprado varios productos y todos de excelente calidad.',
      date: 'Hace 5 días'
    },
    {
      name: 'Laura Sánchez',
      initials: 'LS',
      avatarColor: 'linear-gradient(135deg, #FF8C52, #FFD4B8)',
      text: 'Quedé fascinada con la rapidez del envío. El producto llegó perfectamente empaquetado.',
      date: 'Hace 1 día'
    },
    {
      name: 'Pedro Ramírez',
      initials: 'PR',
      avatarColor: 'linear-gradient(135deg, #FFD4B8, #FFB088)',
      text: 'La mejor experiencia de compra online que he tenido. Volveré a comprar sin dudarlo.',
      date: 'Hace 4 días'
    }
  ];

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
}