import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <h4 class="footer-title">TechStore</h4>
            <p class="footer-text">Tu destino para la mejor tecnología. Innovación, calidad y servicio excepcional.</p>
            <div class="social-links">
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">📷</a>
              <a href="#" class="social-icon">🐦</a>
              <a href="#" class="social-icon">💼</a>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <h5 class="footer-heading">Enlaces Rápidos</h5>
            <ul class="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div class="col-md-4 mb-4">
            <h5 class="footer-heading">Contáctanos</h5>
            <ul class="footer-contact">
              <li>📍 Av. Tecnología 123, Ciudad Digital</li>
              <li>📧 contacto@techstore.com</li>
              <li>📱 +54 (011) 1234-5678</li>
              <li>🕐 Lun - Vie: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 TechStore. Todos los derechos reservados.</p>
          <p class="footer-dev">Desarrollado por Juan Poli</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, var(--text-dark) 0%, #1a252f 100%);
      color: white;
      padding: 60px 0 20px;
      margin-top: 80px;
    }

    .footer-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--primary-orange), var(--dark-orange));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-text {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 176, 136, 0.1);
      border-radius: 50%;
      font-size: 1.2rem;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background: var(--primary-orange);
      transform: translateY(-5px) rotate(360deg);
    }

    .footer-heading {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--primary-orange);
    }

    .footer-links {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.8rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .footer-links a:hover {
      color: var(--primary-orange);
      transform: translateX(5px);
    }

    .footer-contact {
      list-style: none;
      padding: 0;
    }

    .footer-contact li {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.8rem;
      line-height: 1.6;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      margin-top: 3rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-bottom p {
      color: rgba(255, 255, 255, 0.5);
      margin: 0.5rem 0;
    }

    .footer-dev {
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {}