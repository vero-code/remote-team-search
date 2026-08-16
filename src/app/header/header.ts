import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openSearch = output<void>();

  onSearchClick() {
    this.openSearch.emit();
  }

  pages = [
    { id: 'links', label: 'Ссылки', icon: 'icons/links.svg', href: '#' },
    { id: 'contacts', label: 'Контакты', icon: 'icons/contacts.svg', href: '#' },
    { id: 'tags', label: 'Теги', icon: 'icons/tags.svg', href: '#' },
    { id: 'favorites', label: 'Избранное', icon: 'icons/favorites.svg', href: '#' },
    { id: 'visits', label: 'Посещения', icon: 'icons/visits.svg', href: '#' },
  ]
}
