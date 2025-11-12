import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg fixed-top" [class.scrolled]="isScrolled">
      <div class="container">
        <a class="navbar-brand" href="#inicio">
          <span class="logo-text">Tech</span><span class="logo-accent">Store</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#productos">Productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .navbar.scrolled {
      padding: 0.5rem 0;
      box-shadow: 0 4px 20px rgba(255, 140, 82, 0.15);
    }

    .navbar-brand {
      font-size: 1.8rem;
      font-weight: 700;
      transition: transform 0.3s ease;
    }

    .navbar-brand:hover {
      transform: scale(1.05);
    }

    .logo-text {
      color: var(--text-dark);
    }

    .logo-accent {
      color: var(--primary-orange);
    }

    .nav-link {
      color: var(--text-dark) !important;
      font-weight: 500;
      margin: 0 1rem;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-orange);
      transition: width 0.3s ease;
    }

    .nav-link:hover {
      color: var(--primary-orange) !important;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .navbar-toggler {
      border: none;
    }

    .navbar-toggler:focus {
      box-shadow: none;
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    gsap.from('.navbar-brand', {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'bounce'
    });

    gsap.from('.nav-link', {
      duration: 0.8,
      y: -30,
      opacity: 0,
      stagger: 0.1,
      delay: 0.3
    });
  }
}