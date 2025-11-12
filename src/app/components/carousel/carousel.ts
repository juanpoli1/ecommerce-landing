import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="carousel-section py-5">
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <h2 class="section-title">Galería de Productos</h2>
          <p class="section-subtitle">Explora nuestra colección destacada</p>
        </div>
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button *ngFor="let item of carouselItems; let i = index" 
                    type="button" 
                    [attr.data-bs-target]="'#productCarousel'"
                    [attr.data-bs-slide-to]="i"
                    [class.active]="i === 0">
            </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item" *ngFor="let item of carouselItems; let i = index" [class.active]="i === 0">
              <div class="carousel-card">
                <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient [attr.id]="'gradient' + i" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" [attr.style]="'stop-color:' + item.color1 + ';stop-opacity:1'" />
                      <stop offset="100%" [attr.style]="'stop-color:' + item.color2 + ';stop-opacity:1'" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="400" [attr.fill]="'url(#gradient' + i + ')'" rx="20"/>
                  <text x="400" y="200" text-anchor="middle" fill="white" font-size="120" font-weight="bold">{{item.icon}}</text>
                  <text x="400" y="320" text-anchor="middle" fill="white" font-size="32" font-weight="600">{{item.title}}</text>
                </svg>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .carousel-section {
      background: linear-gradient(180deg, var(--white) 0%, var(--light-orange) 100%);
      padding: 80px 0;
    }

    .section-subtitle {
      color: var(--text-gray);
      font-size: 1.1rem;
      margin-top: 1rem;
    }

    .carousel-card {
      max-width: 900px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(255, 140, 82, 0.3);
      transition: transform 0.3s ease;
    }

    .carousel-card:hover {
      transform: scale(1.02);
    }

    .carousel-card svg {
      width: 100%;
      height: auto;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      background-color: var(--primary-orange);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;
    }

    .carousel-control-prev:hover .carousel-control-prev-icon,
    .carousel-control-next:hover .carousel-control-next-icon {
      background-color: var(--dark-orange);
      transform: scale(1.1);
    }

    .carousel-indicators button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--primary-orange);
      opacity: 0.5;
      transition: all 0.3s ease;
    }

    .carousel-indicators button.active {
      opacity: 1;
      transform: scale(1.3);
    }
  `]
})
export class CarouselComponent implements OnInit {
  carouselItems = [
    { icon: '🚀', title: 'Innovación Tecnológica', color1: '#FFB088', color2: '#FF8C52' },
    { icon: '⚡', title: 'Alto Rendimiento', color1: '#FFD4B8', color2: '#FFB088' },
    { icon: '🎯', title: 'Precisión y Calidad', color1: '#FF8C52', color2: '#FFD4B8' },
    { icon: '🌟', title: 'Experiencia Premium', color1: '#FFB088', color2: '#FF8C52' }
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
