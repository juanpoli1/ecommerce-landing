import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="inicio" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Descubre la Nueva Era del <span class="text-gradient">E-Commerce</span></h1>
            <p class="hero-subtitle">Productos tecnológicos innovadores que transforman tu vida digital</p>
            <div class="hero-buttons">
              <button class="btn btn-primary-custom me-3">Explorar Productos</button>
              <button class="btn btn-outline-custom">Conocer Más</button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image floating">
              <div class="image-placeholder">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:var(--primary-orange);stop-opacity:1" />
                      <stop offset="100%" style="stop-color:var(--dark-orange);stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.2"/>
                  <circle cx="200" cy="200" r="100" fill="url(#grad1)" opacity="0.4"/>
                  <rect x="150" y="120" width="100" height="140" rx="10" fill="white" stroke="url(#grad1)" stroke-width="3"/>
                  <circle cx="200" cy="190" r="20" fill="url(#grad1)"/>
                  <rect x="170" y="220" width="60" height="8" rx="4" fill="url(#grad1)"/>
                  <rect x="170" y="235" width="60" height="8" rx="4" fill="var(--secondary-orange)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--light-orange)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #FFFFFF 0%, var(--light-orange) 100%);
      padding-top: 120px;
      padding-bottom: 100px;
      position: relative;
      overflow: hidden;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }

    .text-gradient {
      background: linear-gradient(135deg, var(--primary-orange), var(--dark-orange));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: var(--text-gray);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      position: relative;
    }

    .image-placeholder {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      filter: drop-shadow(0 20px 40px rgba(255, 140, 82, 0.2));
    }

    .hero-wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      .hero-subtitle {
        font-size: 1.1rem;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    gsap.from('.hero-title', {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
      duration: 1,
      x: -100,
      opacity: 0,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.hero-buttons', {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.6,
      ease: 'power3.out'
    });

    gsap.from('.hero-image', {
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      delay: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  }
}