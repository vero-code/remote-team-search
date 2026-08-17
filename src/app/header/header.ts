import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openSearch = output<void>();
  isDesktopSearchOpen = signal(false);

  onActionClick(id: string) {
    if (id === 'search') {
      this.openSearch.emit();
    }
  }

  pages = [
    { id: 'links', label: 'Ссылки', icon: 'icons/links.svg', href: '#' },
    { id: 'contacts', label: 'Контакты', icon: 'icons/contacts.svg', href: '#' },
    { id: 'tags', label: 'Теги', icon: 'icons/tags.svg', href: '#' },
    { id: 'favorites', label: 'Избранное', icon: 'icons/favorites.svg', href: '#' },
    { id: 'visits', label: 'Посещения', icon: 'icons/visits.svg', href: '#' },
  ]

  actions = [
    { id: 'plus',  label: 'Добавить', icon: 'icons/add.svg', class: 'header__btn header__btn--plus' },
    { id: 'history',  label: 'История', icon: 'icons/history.svg', class: 'header__btn header__btn--history' },
    { id: 'search',  label: 'Поиск', icon: 'icons/search.svg', class: 'header__btn header__btn--search' },
    { id: 'bell', label: 'Уведомления', icon: 'icons/notifications.svg', class: 'header__btn header__btn--bell', badge: 32 },
  ]
}
