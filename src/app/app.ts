import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/components/navbar/navbar';
import { FormHeader } from './layout/navbar/components/form-header/form-header';

@Component({
  imports: [RouterOutlet, Navbar, FormHeader],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LibriMei');
}
