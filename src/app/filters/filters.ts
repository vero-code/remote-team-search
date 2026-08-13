import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters {
  options = [
    { id: 'participant', label: 'Я участник', icon: 'icons/item.svg' },
    { id: 'inHeaders', label: 'В заголовках', icon: 'icons/item.svg' },
    { id: 'strictSearch', label: 'Строгий поиск', icon: 'icons/item.svg' },
  ]
}
