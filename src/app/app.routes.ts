import { Routes } from '@angular/router';
import { Books } from './features/books/components/books/books';
import { Quotes } from './features/quotes/components/quotes/quotes';
import { AddBook } from './features/add-book/components/add-book/add-book';
import { AddQuote } from './features/add-quote/components/add-quote/add-quote';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: Books,
  },
  {
    path: 'add-book',
    component: AddBook,
  },
  {
    path: 'quotes',
    component: Quotes,
  },
  {
    path: 'add-quote',
    component: AddQuote,
  },
];
