import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  placeholder = input<string>('Поиск');
  closeSearch = output<void>();
  openFilters = output<void>();
  query = signal('');

  onCloseClick() {
    this.closeSearch.emit();
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.query.set(input.value);
  }

  onClear() {
    this.query.set('');
  }

  onFocus() {
    this.openFilters.emit();
  }
}
