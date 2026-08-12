import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  closeSearch = output<void>();
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
}
