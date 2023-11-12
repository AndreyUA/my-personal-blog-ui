import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

interface Language {
  name: string;
  code: string;
}

const LANGUAGES: Array<Language> = [
  {
    name: 'EN',
    code: 'en',
  },
  {
    name: 'УКР',
    code: 'ua',
  },
  {
    name: 'РУС',
    code: 'ru',
  },
];

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent {
  // TODO: https://angular.dev/guide/signals
  // rebuild it with signals
  readonly languages: Array<Language> = LANGUAGES;
  selectedLanguage: Language = LANGUAGES[0];

  selectLang(lang: Language) {
    this.selectedLanguage = lang;
  }
}
