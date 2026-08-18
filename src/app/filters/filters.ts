import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters {
  author = signal<string>('');

  onMeClick() {
    this.author.set('Я');
  }

  history = [
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список',
  ];

  options = [
    { id: 'participant', label: 'Я участник', icon: 'icons/item.svg' },
    { id: 'inHeaders', label: 'В заголовках', icon: 'icons/item.svg' },
    { id: 'strictSearch', label: 'Строгий поиск', icon: 'icons/item.svg' },
  ]

  onlyOptions = [
    { id: 'tags', label: 'Теги', icon: 'icons/item.svg' },
    { id: 'requests', label: 'Просьбы', icon: 'icons/item.svg' },
    { id: 'contact', label: 'Контакты', icon: 'icons/item.svg' },
  ]
}
