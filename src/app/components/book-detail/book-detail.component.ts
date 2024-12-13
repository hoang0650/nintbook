import { Component } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  standalone: false,
  
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book = {
    languageLevel: 'A2 - B1',
    categories: ['Deutsch als Fremdsprache (DaF)', 'Deutsch'],
    author: 'Herbert Reinecker',
    title: 'Der Kommissar lässt bitten',
    subtitle: 'Lektüre',
    isbn: '978-3-12-675496-5',
    available: true,
    price: 8.99,
    genre: 'Krimi',
    themes: ['Mord', 'Motive']
  };

  quantity: number = 1;

  onOrder() {
    console.log('Order placed for', this.quantity, 'book(s)');
  }
}
