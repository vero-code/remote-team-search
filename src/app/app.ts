import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Search } from './search/search';
import { Filters } from './filters/filters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Search, Filters],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('remote-team-search');

  isSearchOpen = signal(false);
  isFiltersOpen = signal(false);
}
