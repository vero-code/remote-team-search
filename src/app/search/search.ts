import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  closeSearch = output<void>();

  onCloseClick() {
    this.closeSearch.emit();
  }
}
