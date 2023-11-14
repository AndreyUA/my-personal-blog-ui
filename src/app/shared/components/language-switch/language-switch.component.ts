import { Component, WritableSignal, signal } from '@angular/core';
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
  readonly languages: WritableSignal<Array<Language>> = signal(LANGUAGES);
  selectedLanguage: WritableSignal<Language> = signal(LANGUAGES[0]);

  selectLang(lang: Language) {
    this.selectedLanguage.set(lang);
  }
}
