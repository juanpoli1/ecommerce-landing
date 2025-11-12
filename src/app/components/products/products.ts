import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="productos" class="products-section py-5">
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <h2 class="section-title">Nuestros Productos</h2>
          <p class="section-subtitle">Descubre nuestra selección premium de tecnología</p>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let product of products; let i = index" 
               [attr.data-aos]="'fade-up'" 
               [attr.data-aos-delay]="i * 100">
            <div class="product-card card-hover">
              <div class="product-image">
                <div class="product-badge">Nuevo</div>
                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="200" [attr.fill]="product.color"/>
                  <text x="150" y="100" text-anchor="middle" fill="white" font-size="48" font-weight="bold">{{product.icon}}</text>
                </svg>
              </div>
              <div class="product-body">
                <h5 class="product-title">{{product.name}}</h5>
                <p class="product-description">{{product.description}}</p>
                <div class="product-footer">
                  <span class="product-price">{{product.price}}</span>
                  <button class="btn btn-primary-custom btn-sm">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products-section {
      background: var(--white);
      padding: 80px 0;
    }

    .section-subtitle {
      color: var(--text-gray);
      font-size: 1.1rem;
      margin-top: 1rem;
    }

    .product-card {
      background: white;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .product-image {
      position: relative;
      overflow: hidden;
      border-radius: 15px 15px 0 0;
    }

    .product-image svg {
      width: 100%;
      height: 200px;
      transition: transform 0.4s ease;
    }

    .product-card:hover .product-image svg {
      transform: scale(1.1);
    }

    .product-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background: var(--dark-orange);
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      z-index: 1;
    }

    .product-body {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .product-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }

    .product-description {
      color: var(--text-gray);
      flex: 1;
      margin-bottom: 1rem;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .product-price {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-orange);
    }
  `]
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'Smartphone Pro X',
      description: 'Último modelo con tecnología de punta y diseño revolucionario',
      price: '$899',
      icon: '📱',
      color: '#FFB088'
    },
    {
      name: 'Laptop Ultra',
      description: 'Potencia y portabilidad en perfecta armonía',
      price: '$1,299',
      icon: '💻',
      color: '#FFD4B8'
    },
    {
      name: 'Auriculares Elite',
      description: 'Sonido premium con cancelación de ruido activa',
      price: '$299',
      icon: '🎧',
      color: '#FF8C52'
    },
    {
      name: 'Smartwatch 5',
      description: 'Tu asistente personal en la muñeca',
      price: '$399',
      icon: '⌚',
      color: '#FFB088'
    },
    {
      name: 'Tablet Pro',
      description: 'Creatividad sin límites en cualquier lugar',
      price: '$749',
      icon: '📊',
      color: '#FFD4B8'
    },
    {
      name: 'Cámara 4K',
      description: 'Captura cada momento en ultra alta definición',
      price: '$1,099',
      icon: '📷',
      color: '#FF8C52'
    }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => {
        AOS.default.init({
          duration: 800,
          once: true,
          offset: 100
        });
      });
    }
  }
}