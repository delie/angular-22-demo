import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-page',
  imports: [Header, Footer, Sidebar],
  host: { class: 'flex min-h-screen flex-col' },
  templateUrl: './page.html',
})
export class Page {}
