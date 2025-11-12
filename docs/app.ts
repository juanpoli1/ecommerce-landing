import { Component } from '@angular/core';
import { HeaderComponent } from '../src/app/components/header/header';
import { HeroComponent } from '../src/app/components/hero/hero';
import { ProductsComponent } from '../src/app/components/products/products';
import { TestimonialsComponent } from '../src/app/components/testimonials/testimonials';
import { CarouselComponent } from '../src/app/components/carousel/carousel';
import { ContactComponent } from '../src/app/components/contact/contact';
import { FooterComponent } from '../src/app/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ProductsComponent, TestimonialsComponent, CarouselComponent, ContactComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-products></app-products>
    <app-carousel></app-carousel>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class AppComponent {}