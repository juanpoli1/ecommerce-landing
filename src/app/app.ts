import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ProductsComponent } from './components/products/products';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { CarouselComponent } from './components/carousel/carousel';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

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